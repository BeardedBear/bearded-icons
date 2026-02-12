import { copyFileSync, writeFileSync } from "fs";
import { join } from "path";
import { commonConfig } from "../shared/config/common.js";
import {
  copyAssets,
  createDistDirectory,
  generateIcons,
  logSuccess,
} from "../shared/utils/build.js";
import { config } from "./config.js";

// --- Zed Build ---
console.log("Building Zed extension...");

const zedDist = join(process.cwd(), "dist", "zed");
const zedThemeDir = join(zedDist, "icon_themes");
const authorFull = `"${commonConfig.author} <${commonConfig.mail}>"`;

createDistDirectory(zedThemeDir);

// Import theme definitions

import fileExtensions from "../shared/config/file-extensions.js";
import fileNames from "../shared/config/file-names.js";

const icons = generateIcons();

// Convert icons to Zed file_icons structure { path: ... }
const zedFileIcons: Record<string, { path: string }> = {};
Object.entries(icons).forEach(([key, value]) => {
  const path = value.iconPath;
  // Ensure path starts with ./

  const cleanPath = path.startsWith("./") ? path : `./${path}`;
  zedFileIcons[key] = { path: cleanPath };
});

// Add 'default' mapping for fallback file icon
if (zedFileIcons["_file"]) {
  zedFileIcons["default"] = zedFileIcons["_file"];
}

// Add case variant expansion for file stems so that files like
// Makefile, LICENSE, Gemfile, Rakefile are matched.
function expandCaseVariants(
  mapping: Record<string, unknown>,
): Record<string, unknown> {
  const result: Record<string, unknown> = { ...mapping };
  Object.keys(mapping).forEach((key) => {
    // Skip dotted names (extensions or dotfiles)
    if (key.includes(".") || key.startsWith(".")) return;

    // Only expand canonical lowercase keys to avoid overriding intentional mixed/uppercase keys
    if (key !== key.toLowerCase()) return;

    const capitalized = key.charAt(0).toUpperCase() + key.slice(1);
    if (!(capitalized in result)) result[capitalized] = mapping[key];

    const upper = key.toUpperCase();
    if (!(upper in result)) result[upper] = mapping[key];
  });

  return result;
}

// Construct Zed Theme (Schema v0.3.0)
const zedTheme = {
  $schema: "https://zed.dev/schema/icon_themes/v0.3.0.json",
  name: commonConfig.name,
  author: commonConfig.author,
  themes: [
    {
      name: commonConfig.name,
      appearance: "dark",
      directory_icons: {
        collapsed: zedFileIcons["_folder"]?.path || "./icons/folder.svg",
        expanded:
          zedFileIcons["_folder_open"]?.path || "./icons/folder_open.svg",
      },
      file_icons: zedFileIcons,
      file_suffixes: fileExtensions,
      file_stems: expandCaseVariants(fileNames),
    },
  ],
};

// Write Zed theme file
writeFileSync(
  join(zedThemeDir, "bearded-icons.json"),
  JSON.stringify(zedTheme, null, 2),
);

// Write Zed extension.toml manifest
const zedManifest = `schema_version = 1
id = "${commonConfig.id}"
name = "${commonConfig.name}"
version = "${config.version}"
description = "${commonConfig.description}"
authors = [${authorFull}]
repository = "${commonConfig.repository}"

[theme]
name = "${commonConfig.name}"
path = "icon_themes/bearded-icons.json"
appearance = "dark"
`;

writeFileSync(join(zedDist, "extension.toml"), zedManifest);

// Copy assets
copyAssets(zedDist);
copyFileSync(
  join(process.cwd(), "src", "zed", "CHANGELOG.md"),
  join(zedDist, "CHANGELOG.md"),
);
logSuccess("Zed", zedDist);
