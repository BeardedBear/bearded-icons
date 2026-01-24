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

// --- VS Code Build ---
console.log("Building VS Code extension...");

const vscodeDist = join(process.cwd(), "dist", "vscode");

if (!existsSync(vscodeDist)) {
  mkdirSync(vscodeDist, { recursive: true });
}

// Import theme definitions
import defsDark from "./defsDark.js";
import defsLight from "./defsLight.js";
import folderNames from "./shared/folderNames.js";
import folderNamesExpanded from "./shared/folderNamesExpanded.js";

// Construct VS Code Theme
const vscodeTheme = {
  name: "Bearded Icons",
  publisher: "BeardedBear",
  description: "Icon theme for VS Code with a bearded style",
  version: "1.0.0",
  engines: {
    vscode: "*",
  },
  categories: ["Themes"],
  contributes: {
    themes: [
      {
        id: "bearded-icons",
        label: "Bearded Icons",
        path: "./icons.json",
        uiTheme: "vs-dark",
      },
      {
        id: "bearded-icons-light",
        label: "Bearded Icons Light",
        path: "./icons-light.json",
        uiTheme: "vs",
      },
    ],
  },
};

// Write package.json
writeFileSync(join(vscodeDist, "package.json"), JSON.stringify(vscodeTheme, null, 2));

// Generate icons.json (dark theme)
const darkThemeJson = {
  iconDefinitions: icons,
  fileNames: defsDark.fileNames,
  fileExtensions: defsDark.fileExtensions,
  folderNames: folderNames,
  folderNamesExpanded: folderNamesExpanded,
  languageIds: defsDark.languageIds,
};

writeFileSync(join(vscodeDist, "icons.json"), JSON.stringify(darkThemeJson, null, 2));

// Generate icons-light.json (light theme)
const lightThemeJson = {
  iconDefinitions: icons,
  fileNames: defsLight.light.fileNames,
  fileExtensions: defsLight.light.fileExtensions,
  folderNames: folderNames,
  folderNamesExpanded: folderNamesExpanded,
  languageIds: defsLight.light.languageIds,
};

writeFileSync(join(vscodeDist, "icons-light.json"), JSON.stringify(lightThemeJson, null, 2));

// Copy assets
try {
  cpSync(join(process.cwd(), "shared", "icons"), join(vscodeDist, "icons"), {
    recursive: true,
  });
  copyFileSync(join(process.cwd(), "README.md"), join(vscodeDist, "README.md"));
  copyFileSync(join(process.cwd(), "LICENSE"), join(vscodeDist, "LICENSE"));
  copyFileSync(join(process.cwd(), "icon.png"), join(vscodeDist, "icon.png"));
  console.log("✅ VS Code extension built successfully");
  console.log(`📦 Location: ${vscodeDist}`);
} catch (e) {
  console.error("❌ Error copying VS Code assets:", e);
}
