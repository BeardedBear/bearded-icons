import { readdirSync } from "fs";
import { cpSync, copyFileSync } from "fs";
import { join } from "path";
import { existsSync, mkdirSync, writeFileSync } from "fs";

type Icon = Record<string, { iconPath: string }>;

function iconGeneric(name: string): Icon {
  return { [`_${name}`]: { iconPath: `./icons/${name}.svg` } };
}

// Generate icon list from /shared/icons folder
const array: string[] = [];
readdirSync(join(process.cwd(), "shared", "icons")).forEach((file) => array.push(file.split(".")[0]));

const iconList: Icon = array.reduce((acc, curr) => {
  return { ...acc, [`${curr}`]: { iconPath: `./icons/${curr}.svg` } };
}, {});

const icons = {
  ...iconGeneric("file"),
  ...iconGeneric("folder"),
  ...iconGeneric("folder_open"),
  ...iconGeneric("root_folder"),
  ...iconGeneric("root_folder_open"),
  ...iconGeneric("root_folder_light"),
  ...iconGeneric("root_folder_light_open"),
  ...iconList,
};

// --- Zed Build ---
console.log("Building Zed extension...");

const zedDist = join(process.cwd(), "dist", "zed");
const zedThemeDir = join(zedDist, "icon_themes");

if (!existsSync(zedThemeDir)) {
  mkdirSync(zedThemeDir, { recursive: true });
}

// Import theme definitions
import defsDark from "./defsDark.js";

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
  name: "Bearded Icons",
  author: "BeardedBear",
  themes: [
    {
      name: "Bearded Icons",
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
name = "Bearded Icons"
version = "1.0.0"
description = "Icon theme for Zed with a bearded style"
author = "BeardedBear"
repository = "https://github.com/BeardedBear/bearded-icons"

[theme]
name = "Bearded Icons"
path = "icon_themes/bearded-icons.json"
appearance = "dark"
`;

writeFileSync(join(zedDist, "extension.toml"), zedManifest);

// Copy assets
try {
  cpSync(join(process.cwd(), "shared", "icons"), join(zedDist, "icons"), {
    recursive: true,
  });
  copyFileSync(join(process.cwd(), "README.md"), join(zedDist, "README.md"));
  copyFileSync(join(process.cwd(), "LICENSE"), join(zedDist, "LICENSE"));
  copyFileSync(join(process.cwd(), "icon.png"), join(zedDist, "icon.png"));
  console.log("✅ Zed extension built successfully");
  console.log(`📦 Location: ${zedDist}`);
} catch (e) {
  console.error("❌ Error copying Zed assets:", e);
}
