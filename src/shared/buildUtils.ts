import { readdirSync } from "fs";
import { cpSync, copyFileSync } from "fs";
import { join } from "path";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import { commonConfig, assets } from "./commonConfig.js";

export type Icon = Record<string, { iconPath: string }>;

export function iconGeneric(name: string): Icon {
  return { [`_${name}`]: { iconPath: `./icons/${name}.svg` } };
}

export function generateIcons(): Record<string, { iconPath: string }> {
  // Generate icon list from /shared/icons folder
  const array: string[] = [];
  readdirSync(join(process.cwd(), "src", "shared", "icons")).forEach((file) => array.push(file.split(".")[0]));

  const iconList: Icon = array.reduce((acc, curr) => {
    return { ...acc, [`${curr}`]: { iconPath: `./icons/${curr}.svg` } };
  }, {});

  const icons = {
    ...Object.fromEntries(commonConfig.genericIcons.map((name) => Object.entries(iconGeneric(name))).flat()),
    ...iconList,
  };

  return icons;
}

export function createDistDirectory(distPath: string): void {
  if (!existsSync(distPath)) {
    mkdirSync(distPath, { recursive: true });
  }
}

export function copyAssets(distPath: string): void {
  try {
    cpSync(join(process.cwd(), "src", "shared", "icons"), join(distPath, "icons"), {
      recursive: true,
    });

    assets.forEach(({ src, dest }) => {
      copyFileSync(join(process.cwd(), src), join(distPath, dest));
    });

    console.log("✅ Assets copied successfully");
  } catch (e) {
    console.error("❌ Error copying assets:", e);
  }
}

export function logSuccess(buildName: string, location: string): void {
  console.log(`✅ ${buildName} extension built successfully`);
  console.log(`📦 Location: ${location}`);
}
