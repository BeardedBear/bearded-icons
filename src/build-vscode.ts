import { join } from "path";
import { writeFileSync } from "fs";
import { commonConfig } from "./shared/commonConfig.js";
import { generateIcons, createDistDirectory, copyAssets, logSuccess } from "./shared/buildUtils.js";

// --- VS Code Build ---
console.log("Building VS Code extension...");

const vscodeDist = join(process.cwd(), "dist", "vscode");
createDistDirectory(vscodeDist);

// Import theme definitions
import defsDark from "./defsDark.js";
import defsLight from "./defsLight.js";
import folderNames from "./shared/folderNames.js";
import folderNamesExpanded from "./shared/folderNamesExpanded.js";

const icons = generateIcons();

// Construct VS Code Theme
const vscodeTheme = {
  name: commonConfig.name,
  publisher: commonConfig.author,
  description: `Icon theme for VS Code with ${commonConfig.description.toLowerCase()}`,
  version: commonConfig.version,
  engines: {
    vscode: "*",
  },
  categories: ["Themes"],
  contributes: {
    themes: [
      {
        id: "bearded-icons",
        label: commonConfig.name,
        path: "./icons.json",
        uiTheme: "vs-dark",
      },
      {
        id: "bearded-icons-light",
        label: `${commonConfig.name} Light`,
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
copyAssets(vscodeDist);
logSuccess("VS Code", vscodeDist);
