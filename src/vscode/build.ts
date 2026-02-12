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

// --- VS Code Build ---
console.log("Building VS Code extension...");

const vscodeDist = join(process.cwd(), "dist", "vscode");
createDistDirectory(vscodeDist);

// Import theme definitions
import folderNamesExpanded from "../shared/config/folder-names-expanded.js";
import folderNames from "../shared/config/folder-names.js";
import createTheme from "../shared/themes/theme-factory.js";

const defsDark = createTheme("_light");
const defsLight = createTheme("");

const icons = generateIcons();

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

// Construct VS Code Theme
const vscodeTheme = {
  name: commonConfig.id,
  displayName: commonConfig.name,
  publisher: commonConfig.author,
  description: commonConfig.description,
  version: config.version,
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
writeFileSync(
  join(vscodeDist, "package.json"),
  JSON.stringify(vscodeTheme, null, 2),
);

// Generate icons.json (dark theme)
const darkThemeJson = {
  iconDefinitions: icons,
  fileNames: expandCaseVariants(defsDark.fileNames),
  fileExtensions: defsDark.fileExtensions,
  folderNames: folderNames,
  folderNamesExpanded: folderNamesExpanded,
  languageIds: defsDark.languageIds,
};

writeFileSync(
  join(vscodeDist, "icons.json"),
  JSON.stringify(darkThemeJson, null, 2),
);

// Generate icons-light.json (light theme)
const lightThemeJson = {
  iconDefinitions: icons,
  fileNames: expandCaseVariants(defsLight.fileNames),
  fileExtensions: defsLight.fileExtensions,
  folderNames: folderNames,
  folderNamesExpanded: folderNamesExpanded,
  languageIds: defsLight.languageIds,
};

writeFileSync(
  join(vscodeDist, "icons-light.json"),
  JSON.stringify(lightThemeJson, null, 2),
);

// Copy assets
copyAssets(vscodeDist);
copyFileSync(
  join(process.cwd(), "src", "vscode", "CHANGELOG.md"),
  join(vscodeDist, "CHANGELOG.md"),
);
logSuccess("VS Code", vscodeDist);
