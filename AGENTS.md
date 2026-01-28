# AGENTS.md — AI agent guidelines for Bearded Icons

This document is intended for AI assistants and automated agents (Claude Code, GitHub Copilot, ChatGPT/Code Assistant, etc.) that work on the Bearded Icons repository. It gathers the project's purpose, important files, build workflows, conventions, and concrete steps you should follow when making changes (especially around icons and mappings).

If you're an agent performing code changes: prefer small, well-scoped changes, run the build and format/lint steps locally, and always ask for clarification when a request is ambiguous or could have visual impact.

## Git

- Commits

  - Use Conventional Commits: `type(scope?): subject`, where `type` is one of `feat`, `fix`, `chore`, `docs`, `style`, `refactor`, `test`, `build`. Keep the subject concise and in the imperative mood (≤ 72 characters).
  - Put additional context, rationale, and testing steps in the optional body (separate paragraph). If the change fixes an issue, reference it in the body or footer (`Fixes #123`).
  - For breaking API/behavior changes use a footer with the exact prefix `BREAKING CHANGE: ` and a short description of the impact.
  - Keep commits atomic and focused (one logical change per commit). Clean up fixup or iterative commits with interactive rebase/squash before merging.
  - When a change targets a specific editor (for example changes in `src/vscode/`, `dist/vscode/`, `src/zed/` or `dist/zed/`), indicate the affected IDE as the commit scope using its identifier (`vscode` or `zed`). Use `icons` or `shared` for changes that affect shared assets/mappings used by multiple editors.
  - Examples:

    - `feat(icons): add rust icon`
    - `feat(vscode): add rust icon`
    - `fix(zed): correct theme mapping`
    - `fix(build): correct svg optimization script`
    - `chore(deps): bump dev dependencies`
    - `docs(readme): document optimize-svg usage`
    - Breaking change example:

      ```
      feat(api): change icon id format

      BREAKING CHANGE: icon ids now use hyphens instead of underscores
      ```

---

## Project overview

- Bearded Icons is an icon theme system that generates editor-specific packages (VS Code, Zed).
- Source SVGs live in `src/shared/assets/icons/`. The filename (without `.svg`) is the icon identifier.
- Mapping files (extensions, filenames, language IDs, folders) map file/folder patterns to icon identifiers.
- Generators produce dark and light variants and output distributable artifacts into `dist/` (this directory is generated; do not commit changes there).

---

## Quick commands

- Install dependencies: `npm install`
- Build all outputs: `npm run build`
- Build VS Code package: `npm run build:vscode`
- Build Zed package: `npm run build:zed`
- Watch / dev (VS Code): `npm run dev` or `npm run dev:vscode`
- Format code (Prettier): `npm run fix`
- Lint: `npx eslint src/**/*.ts`
- Optimize SVGs: `npm run optimize-svg`
- Create a VSIX: `npm run build:ext`

---

## Project layout (short)

```
/bearded-icons
├─ src/
│  ├─ shared/
│  │  ├─ assets/icons/           # SVG source icons (filename => id)
│  │  ├─ config/                 # mappings: file-extensions, file-names, language-ids, folder names, common metadata
│  │  └─ utils/                  # build helpers: generateIcons, copyAssets...
│  ├─ vscode/                    # VS Code generator (produces icons.json / icons-light.json)
│  └─ zed/                       # Zed generator (produces icon_themes and extension.toml)
├─ scripts/                      # helper scripts (optimize-svg.ts)
├─ package.json
└─ README.md
```

(Example tree for human readers: the authoritative files are under `src/`.)

---

## Important files & what they do

- `src/shared/config/common.ts` — repository metadata and `genericIcons` list (file/folder variants).
- `src/shared/utils/build.ts` — core build utilities: `generateIcons()`, `copyAssets()`, `createDistDirectory()`, `logSuccess()`.
- `src/vscode/build.ts` — assembles the VS Code theme (`icons.json` and `icons-light.json`) and `package.json` for the extension.
- `src/zed/build.ts` — assembles the Zed icon theme and `extension.toml`.
- `src/shared/config/file-extensions.ts` — maps file extensions → icon id.
- `src/shared/config/file-names.ts` — maps exact filenames → icon id (includes agent instruction filenames).
- `src/shared/config/language-ids.ts` — language id → icon id.
- `scripts/optimize-svg.ts` — CLI script to optimize all SVG files (SVGO).

generateIcons reads the icons folder and constructs icon definitions:

```bearded-icons/src/shared/utils/build.ts#L1-60
  readdirSync(join(process.cwd(), "src", "shared", "assets", "icons")).forEach((file) =>
    array.push(file.split(".")[0]),
  );
```

---

## Icon naming & matching rules

- Icon ID is derived directly from the SVG filename (no extension).
  - Example: `typescript.svg` → icon id `typescript`.
- Generic icons like `file`, `folder`, `root_folder`, and light variants are included from `commonConfig.genericIcons`.
- Build scripts expand case variants for canonical lowercase keys (e.g., `makefile` → `Makefile`, `MAKEFILE`) unless the key contains a dot or starts with `.`.
- Files with dots (e.g., `docker-compose.yml`) and dotfiles are treated as-is (no case expansion).

---

## Adding a new icon — recommended step-by-step

1. Add your optimized SVG to `src/shared/assets/icons/` and name it clearly (lowercase, hyphenated or underscore-friendly).
2. If needed, add a mapping:
   - Extension mapping: `src/shared/config/file-extensions.ts`
   - Filename mapping: `src/shared/config/file-names.ts`
   - Language id mapping: `src/shared/config/language-ids.ts`
3. Run optimization: `npm run optimize-svg` (this runs `scripts/optimize-svg.ts`).
4. Run format and lint: `npm run fix` then `npx eslint src/**/*.ts`.
5. Run a build: `npm run build` (verify `dist/vscode/icons.json`, `icons-light.json`, `dist/zed/...`).
6. Add a changelog entry in `src/vscode/CHANGELOG.md` if appropriate.
7. When submitting a change, include:
   - Description of the change
   - Screenshots or a short note about how the icon will be used
   - The checklist steps you followed

Tip: Use the `make()` helper to map a list of extensions in one go (see `src/shared/utils/helpers.ts`).

---

## Code style, linting & tooling

- Configuration files (source of truth)

  - Formatting and linting rules live in the repository configuration files. Treat these files as the authoritative source of truth and consult/update them rather than duplicating their contents here.
  - Important files:
    - Prettier: `.prettierrc.json`
    - ESLint: `.eslintrc.json`
    - TypeScript config (when applicable): `tsconfig.json`

- Quick commands

  - Format code (Prettier): `npm run fix` (reads `.prettierrc.json`)
  - Lint: `npx eslint src/**/*.ts` (reads `.eslintrc.json`)

- Conventions

  - Use ES module imports/exports.
  - Prefer `const` where possible.
  - Use explicit types for exported functions and significant transforms.
  - Run `npm run fix` and `npx eslint src/**/*.ts` before submitting changes.

- When updating formatting/linting rules

  - If you need to change formatting or linting rules, update the appropriate config file(s) and include a short explanation in your PR describing the rationale and impact. Avoid copying configuration contents into `AGENTS.md` to prevent the guidance here from becoming obsolete.

---

## SVG optimization

- Optimize SVGs via `npm run optimize-svg` (`scripts/optimize-svg.ts`) before including them in a contribution.
- The script is configured to keep `viewBox` and avoid problematic ID cleanups by default; check `scripts/optimize-svg.ts` if you need to modify behavior.

---

## Testing & verification

There is no automated UI test harness. Recommended verification steps:

1. Run `npm run optimize-svg`, `npm run fix`, `npx eslint src/**/*.ts`.
2. Run `npm run build`.
3. Inspect `dist/vscode/icons.json` and `dist/vscode/icons/` to confirm icons are present and referenced correctly.
4. Optionally create a `.vsix` with `npm run build:ext` and install it locally in VS Code for a visual check.
5. For Zed, check `dist/zed/icon_themes/bearded-icons.json`.

---

## Versioning & release

- Versioning and release steps are manual in this repo:
  - Update the version(s) where appropriate (e.g. `src/vscode/config.ts` / `src/zed/config.ts`).
  - Add changelog notes.
  - Create a release and attach packaged artifacts if approved.
- Packaging for VS Code uses `vsce` (see `npm run build:ext`).
