import { join } from "path";
import { writeFileSync } from "fs";
import { commonConfig } from "./shared/commonConfig.js";
import { generateIcons, createDistDirectory, copyAssets, logSuccess, Icon } from "./shared/buildUtils.js";

// --- Zed Build ---
console.log("Building Zed extension...");

const zedDist = join(process.cwd(), "dist", "zed");
const zedThemeDir = join(zedDist, "icon_themes");

createDistDirectory(zedThemeDir);

// Import theme definitions
import defsDark from "./defsDark.js";

const icons = generateIcons();

// Convert icons to Zed file_icons structure { path: ... }
const zedFileIcons: Record<string, { path: string }> = {};
Object.entries(icons).forEach(([key, value]) => {
  const path = (value as any).iconPath;
  // Ensure path starts with ./
  const cleanPath = path.startsWith("./") ? path : `./${path}`;
  zedFileIcons[key] = { path: cleanPath };
});

// Add 'default' mapping for fallback file icon
if (zedFileIcons["_file"]) {
  zedFileIcons["default"] = zedFileIcons["_file"];
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
        expanded: zedFileIcons["_folder_open"]?.path || "./icons/folder_open.svg",
      },
      file_icons: zedFileIcons,
      file_suffixes: defsDark.fileExtensions,
      file_stems: defsDark.fileNames,
    },
  ],
};

// Write Zed theme file
writeFileSync(join(zedThemeDir, "bearded-icons.json"), JSON.stringify(zedTheme, null, 2));

// Write Zed extension.toml manifest
const zedManifest = `schema_version = 1
id = "bearded-icons"
name = "${commonConfig.name}"
version = "${commonConfig.version}"
description = "Icon theme for Zed with ${commonConfig.description.toLowerCase()}"
author = "${commonConfig.author}"
repository = "${commonConfig.repository}"

[theme]
name = "${commonConfig.name}"
path = "icon_themes/bearded-icons.json"
appearance = "dark"
`;

writeFileSync(join(zedDist, "extension.toml"), zedManifest);

// Copy assets
copyAssets(zedDist);
logSuccess("Zed", zedDist);
