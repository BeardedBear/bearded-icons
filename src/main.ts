import { join } from "path";
import { writeFile, existsSync, mkdirSync, cpSync, copyFileSync } from "fs";
import defsDark from "./defsDark";
import defsLight from "./defsLight";
import icons from "./icons";

// --- VS Code Build ---
const vscodeDist = join(process.cwd(), "packages", "vscode");

if (!existsSync(vscodeDist)) {
  mkdirSync(vscodeDist, { recursive: true });
}

console.log("Building VS Code extension...");

writeFile(
  join(vscodeDist, "icons.json"),
  JSON.stringify({
    hidesExplorerArrows: true,
    iconDefinitions: icons,
    ...defsDark,
    ...defsLight,
  }),
  (err) => {
    if (err) {
      console.log("Error writing VS Code icons.json", err);
    } else {
      console.log("Generated packages/vscode/icons.json");
    }
  },
);

try {
  cpSync(join(process.cwd(), "icons"), join(vscodeDist, "icons"), {
    recursive: true,
  });
  copyFileSync(
    join(process.cwd(), "README.md"),
    join(vscodeDist, "README.md"),
  );
  copyFileSync(join(process.cwd(), "LICENSE"), join(vscodeDist, "LICENSE"));
  copyFileSync(join(process.cwd(), "icon.png"), join(vscodeDist, "icon.png"));
  console.log("Copied assets to packages/vscode");
} catch (e) {
  console.error("Error copying VS Code assets:", e);
}

// --- Zed Build ---
const zedDist = join(process.cwd(), "packages", "zed");
const zedThemeDir = join(zedDist, "icon_themes");

if (!existsSync(zedThemeDir)) {
  mkdirSync(zedThemeDir, { recursive: true });
}

console.log("Building Zed extension...");

// Convert icons to Zed file_icons structure { path: ... }
const zedFileIcons: Record<string, { path: string }> = {};
Object.entries(icons).forEach(([key, value]) => {
  const path = (value as any).iconPath;
  // Ensure path starts with ./
  const cleanPath = path.startsWith("./") ? path : `./${path}`;
  zedFileIcons[key] = { path: cleanPath };
});

// Add 'default' mapping for the fallback file icon
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

writeFile(
  join(zedThemeDir, "bearded-icons.json"),
  JSON.stringify(zedTheme, null, 2),
  (err) => {
    if (err) {
      console.log("Error writing Zed theme json", err);
    } else {
      console.log("Generated packages/zed/icon_themes/bearded-icons.json");
    }
  },
);

try {
  cpSync(join(process.cwd(), "icons"), join(zedDist, "icons"), {
    recursive: true,
  });
  copyFileSync(join(process.cwd(), "README.md"), join(zedDist, "README.md"));
  copyFileSync(join(process.cwd(), "LICENSE"), join(zedDist, "LICENSE"));
  // Zed might not use icon.png in the same way, but good to have
  copyFileSync(join(process.cwd(), "icon.png"), join(zedDist, "icon.png"));
  console.log("Copied assets to packages/zed");
} catch (e) {
  console.error("Error copying Zed assets:", e);
}
