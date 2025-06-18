# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## About This Project

Bearded Icons is a VS Code icon theme extension. The project generates a JSON icon theme file (`icons.json`) by:
1. Scanning SVG files in the `/icons` directory
2. Mapping file extensions, file names, and language IDs to appropriate icons
3. Generating both light and dark theme variants

## Common Commands

**Build the extension**: `npm run build`
- Compiles TypeScript and generates `icons.json` using `vite-node src/main.ts`

**Development mode**: `npm run dev` 
- Runs build in watch mode, rebuilding when files change

**Format code**: `npm run fix`
- Runs Prettier on all TypeScript files in src/

**Lint code**: `npx eslint src/**/*.ts`
- Run ESLint to check code quality and TypeScript rules

**Optimize SVGs**: `npm run optimize-svg`
- Runs SVG optimization script on icon files

**Package extension**: `npm run build:ext`
- Creates .vsix package file using vsce

## Code Architecture

### Core Build Process (`src/main.ts`)
The main entry point that orchestrates the icon theme generation:
- Combines icon definitions, dark theme mappings, and light theme mappings
- Outputs final `icons.json` file for VS Code consumption

### Icon System (`src/icons.ts`)
- Automatically discovers all SVG files in `/icons` directory
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

**Adding new icons**: Place SVG files in `/icons` directory - they're automatically discovered and included

**Icon naming**: SVG filename becomes the icon identifier (e.g., `typescript.svg` → `typescript` icon)

**Theme mapping**: Use shared configuration files to map file patterns to icons, with separate light/dark variants possible

**File extension mapping**: Complex extensions are handled (e.g., `controller.ts` maps to NestJS controller icon)

## Code Quality

**ESLint configuration**: Uses `@typescript-eslint/recommended` with explicit function return type warnings

**Prettier configuration**: 120 character line width, semicolons, trailing commas, arrow function parentheses