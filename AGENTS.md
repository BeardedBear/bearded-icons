# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## About This Project

Bearded Icons is an icon theme that generates extensions for multiple editors (VS Code, Zed) by:

1. Scanning SVG files in the `/src/shared/icons` directory
2. Mapping file extensions, file names, and language IDs to appropriate icons
3. Generating both light and dark theme variants
4. Creating editor-specific packages

## Common Commands

**Build all extensions**: `npm run build`

- Builds both VS Code and Zed extensions

**Build VS Code extension**: `npm run build:vscode`

- Compiles TypeScript and generates VS Code theme files using `vite-node src/build-vscode.ts`

**Build Zed extension**: `npm run build:zed`

- Compiles TypeScript and generates Zed theme files using `vite-node src/build-zed.ts`

**Development mode**: `npm run dev`

- Runs VS Code build in watch mode, rebuilding when files change

**Zed dev mode**: `npm run dev:zed`

- Runs Zed build in watch mode

**Format code**: `npm run fix`

- Runs Prettier on all TypeScript files in src/

**Lint code**: `npx eslint src/**/*.ts`

- Run ESLint to check code quality and TypeScript rules

**Optimize SVGs**: `npm run optimize-svg`

- Runs SVG optimization script on icon files

**Package extension**: `npm run build:ext`

- Creates .vsix package file using vsce

## Code Architecture

### Build Processes

**VS Code Build (`src/build-vscode.ts`)**

- Generates VS Code extension with package.json, icons.json (dark) and icons-light.json (light)
- Uses shared configuration for mappings and metadata

**Zed Build (`src/build-zed.ts`)**

- Generates Zed extension with extension.toml and theme.json
- Converts icon definitions to Zed's expected format

### Shared Build Utilities (`src/shared/buildUtils.ts`)

- `generateIcons()`: Discovers and processes SVG files from `/src/shared/icons`
- `createDistDirectory()`: Creates build directories
- `copyAssets()`: Copies README, LICENSE, icon.png and SVG files
- `logSuccess()`: Consistent success logging

### Shared Configuration (`src/shared/commonConfig.ts`)

- Centralized metadata: name, author, description, version, repository
- Generic icons list (file, folder variants)
- Asset definitions for copying

### Icon System

- Automatically discovers all SVG files in `/src/shared/icons` directory
- Creates icon definitions mapping each SVG to its file path
- Includes special folder icons (open/closed states, root folders, light variants)

### Theme Definitions

- **`src/defsDark.ts`**: Default dark theme mappings for files, folders, extensions, and language IDs
- **`src/defsLight.ts`**: Light theme variant mappings
- Both import and combine mappings from shared configuration files

### Shared Configuration (`src/shared/`)

- **`fileExtensions.ts`**: Maps file extensions to icon names (e.g., `.js` → `js` icon)
- **`fileNames.ts`**: Maps specific filenames to icons (e.g., `package.json` → `npm` icon)
- **`folderNames.ts`**: Maps folder names to specific folder icons
- **`folderNamesExpanded.ts`**: Maps folder names for expanded/open state icons
- **`languageIds.ts`**: Maps VS Code language identifiers to icons

### Data Files (`src/data/`)

- **`media.ts`**: Arrays of media file extensions (audio, video, image)
- **`bundler.ts`**: Arrays of bundler-related file patterns

### Helper Utilities (`src/helper.ts`)

- `make()` function: Creates mappings from arrays of items to a common icon scope
- Used to bulk-assign the same icon to multiple file types

## Key Patterns

**Adding new icons**: Place SVG files in `/src/shared/icons` directory - they're automatically discovered and included

**Icon naming**: SVG filename becomes the icon identifier (e.g., `typescript.svg` → `typescript` icon)

**Theme mapping**: Use shared configuration files to map file patterns to icons, with separate light/dark variants possible

**File extension mapping**: Complex extensions are handled (e.g., `controller.ts` maps to NestJS controller icon)

**Icon naming**: SVG filename becomes the icon identifier (e.g., `typescript.svg` → `typescript` icon)

**Theme mapping**: Use shared configuration files to map file patterns to icons, with separate light/dark variants possible

**File extension mapping**: Complex extensions are handled (e.g., `controller.ts` maps to NestJS controller icon)

## Code Quality

**ESLint configuration**: Uses `@typescript-eslint/recommended` with explicit function return type warnings

**Prettier configuration**: 120 character line width, semicolons, trailing commas, arrow function parentheses
