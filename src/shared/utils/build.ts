import { copyFileSync, cpSync, existsSync, mkdirSync, readdirSync } from 'fs';
import { join } from 'path';
import { assets, commonConfig } from '../config/common.js';

export type Icon = Record<string, { iconPath: string }>;

export function iconGeneric(name: string): Icon {
  return { [`_${name}`]: { iconPath: `./icons/${name}.svg` } };
}

export function generateIcons(): Icon {
  const iconSrcDir = join(process.cwd(), 'src', 'shared', 'assets', 'icons');
  const files = readdirSync(iconSrcDir);

  // Map every physical file to its icon path
  const iconList: Icon = Object.fromEntries(
    files.map((file) => {
      const name = file.split('.')[0];
      return [name, { iconPath: `./icons/${file}` }]; // Use full filename to preserve extensions
    })
  );

  // Generate generic UI icons (e.g., _file, _folder)
  const genericEntries = commonConfig.genericIcons.flatMap((name) => 
    Object.entries(iconGeneric(name))
  );

  return {
    ...Object.fromEntries(genericEntries),
    ...iconList,
  };
}

export function createDistDirectory(distPath: string): void {
  if (!existsSync(distPath)) {
    mkdirSync(distPath, { recursive: true });
  }
}

export function copyAssets(distPath: string): void {
  try {
    cpSync(
      join(process.cwd(), 'src', 'shared', 'assets', 'icons'),
      join(distPath, 'icons'),
      {
        recursive: true,
      },
    );

    assets.forEach(({ src, dest }) => {
      copyFileSync(join(process.cwd(), src), join(distPath, dest));
    });

    console.log('✅ Assets copied successfully');
  } catch (e) {
    console.error('❌ Error copying assets:', e);
  }
}

export function logSuccess(buildName: string, location: string): void {
  console.log(`✅ ${buildName} extension built successfully`);
  console.log(`📦 Location: ${location}`);
}
