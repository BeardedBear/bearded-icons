import { webpack } from "../data/bundler";
import { make } from "../helper";

export default {
  ...make(webpack, "webpack"),
  ".angular-cli.json": "angular",
  "angular-cli.json": "angular",
  "angular.json": "angular",
  ".angular.json": "angular",
  "api-extractor.json": "api_extractor",
  "api-extractor-base.json": "api_extractor",
  "appveyor.yml": "appveyor",
  ".appveyor.yml": "appveyor",
  "aurelia.json": "aurelia",
  "azure-pipelines.yml": "azure",
  ".vsts-ci.yml": "azure",
  ".babelrc": "babel",
  ".babelignore": "babel",
  ".babelrc.js": "babel",
  ".babelrc.cjs": "babel",
  ".babelrc.mjs": "babel",
  ".babelrc.json": "babel",
  "babel.config.js": "babel",
  "babel.config.cjs": "babel",
  "babel.config.mjs": "babel",
  "babel.config.json": "babel",
  "vetur.config.js": "vue",
  "vetur.config.ts": "vue",
  ".bzrignore": "bazaar",
  ".bazelrc": "bazel",
  "bazel.rc": "bazel",
  "bazel.bazelrc": "bazel",
  BUILD: "bazel",
  "bitbucket-pipelines.yml": "bitbucketpipeline",
  ".bithoundrc": "bithound",
  ".bowerrc": "bower",
  "bower.json": "bower",
  ".browserslistrc": "browserslist",
  browserslist: "browserslist",
  gemfile: "bundler",
  "gemfile.lock": "bundler",
  "capacitor.config.json": "capacitor",
  "cargo.toml": "cargo",
  "cargo.lock": "cargo",
  chefignore: "chef",
  berksfile: "chef",
  "berksfile.lock": "chef",
  policyfile: "chef",
  "circle.yml": "circleci",
  ".cfignore": "cloudfoundry",
  ".codacy.yml": "codacy",
  ".codacy.yaml": "codacy",
  ".codeclimate.yml": "codeclimate",
  "codecov.yml": "codecov",
  ".codecov.yml": "codecov",
  "config.codekit": "codekit",
  "config.codekit2": "codekit",
  "config.codekit3": "codekit",
  ".config.codekit": "codekit",
  ".config.codekit2": "codekit",
  ".config.codekit3": "codekit",
  "coffeelint.json": "coffeelint",
  ".coffeelintignore": "coffeelint",
  "composer.json": "composer",
  "composer.lock": "composerlock",
  "conanfile.txt": "conan",
  "conanfile.py": "conan",
  ".condarc": "conda",
  ".coveralls.yml": "coveralls",
  "crowdin.yml": "crowdin",
  ".csscomb.json": "csscomb",
  ".csslintrc": "csslint",
  ".cvsignore": "cvs",
  ".boringignore": "darcs",
  "dependabot.yml": "dependabot",
  "dependencies.yml": "dependencies",
  "devcontainer.json": "devcontainer",
  "docker-compose-prod.yml": "docker",
  "docker-compose.alpha.yaml": "docker",
  "docker-compose.alpha.yml": "docker",
  "docker-compose.beta.yaml": "docker",
  "docker-compose.beta.yml": "docker",
  "docker-compose.ci-build.yml": "docker",
  "docker-compose.ci.yaml": "docker",
  "docker-compose.ci.yml": "docker",
  "docker-compose.dev.yaml": "docker",
  "docker-compose.dev.yml": "docker",
  "docker-compose.development.yaml": "docker",
  "docker-compose.development.yml": "docker",
  "docker-compose.local.yaml": "docker",
  "docker-compose.local.yml": "docker",
  "docker-compose.override.yaml": "docker",
  "docker-compose.override.yml": "docker",
  "docker-compose.prod.yaml": "docker",
  "docker-compose.prod.yml": "docker",
  "docker-compose.production.yaml": "docker",
  "docker-compose.production.yml": "docker",
  "docker-compose.stage.yaml": "docker",
  "docker-compose.stage.yml": "docker",
  "docker-compose.staging.yaml": "docker",
  "docker-compose.staging.yml": "docker",
  "docker-compose.test.yaml": "docker",
  "docker-compose.test.yml": "docker",
  "docker-compose.testing.yaml": "docker",
  "docker-compose.testing.yml": "docker",
  "docker-compose.vs.debug.yml": "docker",
  "docker-compose.vs.release.yml": "docker",
  "docker-compose.web.yaml": "docker",
  "docker-compose.web.yml": "docker",
  "docker-compose.worker.yaml": "docker",
  "docker-compose.worker.yml": "docker",
  "docker-compose.yaml": "docker",
  "docker-compose.yml": "docker",
  "Dockerfile-production": "docker",
  "dockerfile.alpha": "docker",
  "dockerfile.beta": "docker",
  "dockerfile.ci": "docker",
  "dockerfile.dev": "docker",
  "dockerfile.development": "docker",
  "dockerfile.local": "docker",
  "dockerfile.prod": "docker",
  "dockerfile.production": "docker",
  "dockerfile.stage": "docker",
  "dockerfile.staging": "docker",
  "dockerfile.test": "docker",
  "dockerfile.testing": "docker",
  "dockerfile.web": "docker",
  "dockerfile.worker": "docker",
  dockerfile: "docker",
  "docker-compose.debug.yml": "dockerdebug",
  "docker-cloud.yml": "docker",
  ".dockerignore": "dockerignore",
  ".doczrc": "docz",
  "docz.js": "docz",
  "docz.json": "docz",
  ".docz.js": "docz",
  ".docz.json": "docz",
  "doczrc.js": "docz",
  "doczrc.json": "docz",
  "docz.config.js": "docz",
  "docz.config.json": "docz",
  ".dojorc": "dojo",
  ".drone.yml": "drone",
  ".drone.yml.sig": "drone",
  ".dvc": "dvc",
  ".editorconfig": "editorconfig",
  "elm-package.json": "elm",
  ".ember-cli": "ember",
  emakefile: "erlang",
  ".emakerfile": "erlang",
  ".eslintrc": "eslint",
  ".eslintignore": "eslintignore",
  ".eslintcache": "eslint",
  ".eslintrc.js": "eslint",
  ".eslintrc.mjs": "eslint",
  ".eslintrc.cjs": "eslint",
  ".eslintrc.json": "eslint",
  ".eslintrc.yaml": "eslint",
  ".eslintrc.yml": "eslint",
  ".eslintrc.browser.json": "eslint",
  ".eslintrc.base.json": "eslint",
  "eslint-preset.js": "eslint",
  "eslint.config.js": "eslint",
  "eslint.config.cjs": "eslint",
  "eslint.config.mjs": "eslint",
  "eslint.config.ts": "eslint",
  "_eslintrc.cjs": "eslint",
  "app.json": "expo",
  "app.config.js": "expo",
  "app.config.json": "expo",
  "app.config.json5": "expo",
  "favicon.ico": "favicon",
  ".firebaserc": "firebase",
  "firebase.json": "firebasehosting",
  "firestore.rules": "firestore",
  "firestore.indexes.json": "firestore",
  ".flooignore": "floobits",
  ".flowconfig": "flow",
  ".flutter-plugins": "flutter",
  ".metadata": "flutter",
  ".fossaignore": "fossa",
  "ignore-glob": "fossil",
  "fuse.js": "fusebox",
  "gatsby-config.js": "gatsby",
  "gatsby-config.ts": "gatsby",
  "gatsby-node.js": "gatsby",
  "gatsby-node.ts": "gatsby",
  "gatsby-browser.js": "gatsby",
  "gatsby-browser.ts": "gatsby",
  "gatsby-ssr.js": "gatsby",
  "gatsby-ssr.ts": "gatsby",
  ".git-blame-ignore-revs": "git",
  ".gitattributes": "git",
  ".gitconfig": "git",
  ".gitignore": "git",
  ".gitmodules": "git",
  ".gitkeep": "git",
  ".mailmap": "git",
  ".gitlab-ci.yml": "gitlab",
  "glide.yml": "glide",
  "go.sum": "go_package",
  "go.mod": "go_package",
  ".gqlconfig": "graphql",
  ".graphqlconfig": "graphql_config",
  ".graphqlconfig.yml": "graphql_config",
  ".graphqlconfig.yaml": "graphql_config",
  "greenkeeper.json": "greenkeeper",
  "gridsome.config.js": "gridsome",
  "gridsome.config.ts": "gridsome",
  "gridsome.server.js": "gridsome",
  "gridsome.server.ts": "gridsome",
  "gridsome.client.js": "gridsome",
  "gridsome.client.ts": "gridsome",
  "gruntfile.js": "grunt",
  "gruntfile.coffee": "grunt",
  "gruntfile.ts": "grunt",
  "gruntfile.babel.js": "grunt",
  "gruntfile.babel.coffee": "grunt",
  "gruntfile.babel.ts": "grunt",
  "gulpfile.js": "gulp",
  "gulpfile.coffee": "gulp",
  "gulpfile.ts": "gulp",
  "gulpfile.esm.js": "gulp",
  "gulpfile.esm.coffee": "gulp",
  "gulpfile.esm.ts": "gulp",
  "gulpfile.babel.js": "gulp",
  "gulpfile.babel.coffee": "gulp",
  "gulpfile.babel.ts": "gulp",
  "haxelib.json": "haxe",
  "checkstyle.json": "haxecheckstyle",
  ".p4ignore": "helix",
  ".htmlhintrc": "htmlhint",
  ".huskyrc": "husky",
  "husky.config.js": "husky",
  ".huskyrc.js": "husky",
  ".huskyrc.json": "husky",
  ".huskyrc.yaml": "husky",
  ".huskyrc.yml": "husky",
  "ionic.project": "ionic",
  "ionic.config.json": "ionic",
  jakefile: "jake",
  "jakefile.js": "jake",
  "jest.config.json": "jest",
  "jest.json": "jest",
  ".jestrc": "jest",
  ".jestrc.js": "jest",
  ".jestrc.json": "jest",
  "jest.config.js": "jest",
  "jest.config.cjs": "jest",
  "jest.config.mjs": "jest",
  "jest.config.babel.js": "jest",
  "jest.config.babel.cjs": "jest",
  "jest.config.babel.mjs": "jest",
  "jest.preset.js": "jest",
  "jest.preset.ts": "jest",
  "jest.preset.cjs": "jest",
  "jest.preset.mjs": "jest",
  ".jpmignore": "jpm",
  ".jsbeautifyrc": "jsbeautify",
  jsbeautifyrc: "jsbeautify",
  ".jsbeautify": "jsbeautify",
  jsbeautify: "jsbeautify",
  "jsconfig.json": "jsconfig",
  ".jscpd.json": "jscpd",
  "jscpd-report.xml": "jscpd",
  "jscpd-report.json": "jscpd",
  "jscpd-report.html": "jscpd",
  ".jshintrc": "jshint",
  ".jshintignore": "jshint",
  "karma.conf.js": "karma",
  "karma.conf.coffee": "karma",
  "karma.conf.ts": "karma",
  ".kitchen.yml": "kitchenci",
  "kitchen.yml": "kitchenci",
  ".kiteignore": "kite",
  "layout.html": "layout",
  "layout.htm": "layout",
  "lerna.json": "lerna",
  license: "license",
  licence: "license",
  "license.md": "license",
  "license.txt": "license",
  "licence.md": "license",
  "licence.txt": "license",
  ".lighthouserc.js": "lighthouse",
  ".lighthouserc.json": "lighthouse",
  ".lighthouserc.yaml": "lighthouse",
  ".lighthouserc.yml": "lighthouse",
  "include.xml": "lime",
  ".lintstagedrc": "lintstagedrc",
  "lint-staged.config.js": "lintstagedrc",
  ".lintstagedrc.js": "lintstagedrc",
  ".lintstagedrc.json": "lintstagedrc",
  ".lintstagedrc.yaml": "lintstagedrc",
  ".lintstagedrc.yml": "lintstagedrc",
  manifest: "manifest",
  "manifest.bak": "manifest",
  "manifest.json": "manifest",
  "manifest.skip": "manifes",
  ".markdownlint.json": "markdownlint",
  "maven.config": "maven",
  "pom.xml": "maven",
  "extensions.xml": "maven",
  "settings.xml": "maven",
  "pom.properties": "maven",
  ".hgignore": "mercurial",
  "mocha.opts": "mocha",
  ".mocharc.js": "mocha",
  ".mocharc.json": "mocha",
  ".mocharc.jsonc": "mocha",
  ".mocharc.yaml": "mocha",
  ".mocharc.yml": "mocha",
  modernizr: "modernizr",
  "modernizr.js": "modernizr",
  "modernizrrc.js": "modernizr",
  ".modernizr.js": "modernizr",
  ".modernizrrc.js": "modernizr",
  "moleculer.config.js": "moleculer",
  "moleculer.config.json": "moleculer",
  "moleculer.config.ts": "moleculer",
  ".mtn-ignore": "monotone",
  ".nest-cli.json": "nestjs",
  "nest-cli.json": "nestjs",
  "nestconfig.json": "nestjs",
  ".nestconfig.json": "nestjs",
  "netlify.toml": "netlify",
  _redirects: "netlify",
  "ng-tailwind.js": "ng_tailwind",
  "nginx.conf": "nginx",
  "build.ninja": "ninja",
  ".node-version": "node",
  "nodemon.json": "nodemon",
  ".npmignore": "npm",
  ".npmrc": "npm",
  "package.json": "npm",
  "package-lock.json": "npmlock",
  "npm-shrinkwrap.json": "npm",
  ".nsrirc": "nsri",
  ".nsriignore": "nsri",
  "nsri.config.js": "nsri",
  ".nsrirc.js": "nsri",
  ".nsrirc.json": "nsri",
  ".nsrirc.yaml": "nsri",
  ".nsrirc.yml": "nsri",
  ".integrity.json": "nsri-integrity",
  "nuxt.config.js": "nuxt",
  "nuxt.config.ts": "nuxt",
  ".nycrc": "nyc",
  ".nycrc.json": "nyc",
  ".merlin": "ocaml",
  "paket.dependencies": "paket",
  "paket.lock": "paket",
  "paket.references": "paket",
  "paket.template": "paket",
  "paket.local": "paket",
  ".php_cs": "phpcsfixer",
  ".php_cs.dist": "phpcsfixer",
  phpunit: "phpunit",
  "phpunit.xml": "phpunit",
  "phpunit.xml.dist": "phpunit",
  ".phraseapp.yml": "phraseapp",
  pipfile: "pip",
  "pipfile.lock": "pip",
  "platformio.ini": "platformio",
  "pnpmfile.js": "pnpm",
  "pnpm-workspace.yaml": "pnpm",
  ".postcssrc": "postcssconfig",
  ".postcssrc.json": "postcssconfig",
  ".postcssrc.yml": "postcssconfig",
  ".postcssrc.js": "postcssconfig",
  ".postcssrc.cjs": "postcssconfig",
  "postcss.config.js": "postcssconfig",
  "postcss.config.cjs": "postcssconfig",
  ".pre-commit-config.yaml": "precommit",
  ".prettierrc": "prettier",
  ".prettierignore": "prettierignore",
  "prettier.config.js": "prettier",
  "prettier.config.cjs": "prettier",
  "prettier.config.mjs": "prettier",
  "prettier.config.ts": "prettier",
  "prettier.config.coffee": "prettier",
  ".prettierrc.js": "prettier",
  ".prettierrc.json": "prettier",
  ".prettierrc.yml": "prettier",
  ".prettierrc.yaml": "prettier",
  procfile: "procfile",
  "protractor.conf.js": "protractor",
  "protractor.conf.coffee": "protractor",
  "protractor.conf.ts": "protractor",
  ".jade-lintrc": "pug",
  ".pug-lintrc": "pug",
  ".jade-lint.json": "pug",
  ".pug-lintrc.js": "pug",
  ".pug-lintrc.json": "pug",
  ".pyup": "pyup",
  ".pyup.yml": "pyup",
  qmldir: "qmldir",
  "quasar.conf.js": "quasar",
  rakefile: "rake",
  "razzle.config.js": "razzle",
  "readme.md": "readme",
  "readme.txt": "readme",
  ".rehyperc": "rehype",
  ".rehypeignore": "rehype",
  ".rehyperc.js": "rehype",
  ".rehyperc.json": "rehype",
  ".rehyperc.yml": "rehype",
  ".rehyperc.yaml": "rehype",
  ".remarkrc": "remark",
  ".remarkignore": "remark",
  ".remarkrc.js": "remark",
  ".remarkrc.json": "remark",
  ".remarkrc.yml": "remark",
  ".remarkrc.yaml": "remark",
  ".renovaterc": "renovate",
  "renovate.json": "renovate",
  ".renovaterc.json": "renovate",
  ".retextrc": "retext",
  ".retextignore": "retext",
  ".retextrc.js": "retext",
  ".retextrc.json": "retext",
  ".retextrc.yml": "retext",
  ".retextrc.yaml": "retext",
  "robots.txt": "robots",
  "rollup.config.js": "rollup",
  "rollup.config.mjs": "rollup",
  "rollup.config.coffee": "rollup",
  "rollup.config.ts": "rollup",
  "rollup.config.common.js": "rollup",
  "rollup.config.common.mjs": "rollup",
  "rollup.config.common.coffee": "rollup",
  "rollup.config.common.ts": "rollup",
  "rollup.config.dev.js": "rollup",
  "rollup.config.dev.mjs": "rollup",
  "rollup.config.dev.coffee": "rollup",
  "rollup.config.dev.ts": "rollup",
  "rollup.config.prod.js": "rollup",
  "rollup.config.prod.mjs": "rollup",
  "rollup.config.prod.coffee": "rollup",
  "rollup.config.prod.ts": "rollup",
  ".rspec": "rspec",
  ".rubocop.yml": "rubocop",
  ".rubocop_todo.yml": "rubocop",
  "rust-toolchain": "rust_toolchain",
  ".sentryclirc": "sentry",
  "serverless.yml": "serverless",
  "snapcraft.yaml": "snapcraft",
  ".snyk": "snyk",
  ".solidarity": "solidarity",
  ".solidarity.json": "solidarity",
  ".stylelintrc": "stylelint",
  ".stylelintignore": "stylelintignore",
  ".stylelintcache": "stylelint",
  "stylelint.config.js": "stylelint",
  "stylelint.config.cjs": "stylelint",
  "stylelint.config.mjs": "stylelint",
  "stylelint.config.json": "stylelint",
  "stylelint.config.yaml": "stylelint",
  "stylelint.config.yml": "stylelint",
  "stylelint.config.ts": "stylelint",
  ".stylelintrc.js": "stylelint",
  ".stylelintrc.json": "stylelint",
  ".stylelintrc.yaml": "stylelint",
  ".stylelintrc.yml": "stylelint",
  ".stylelintrc.ts": "stylelint",
  ".stylelintrc.cjs": "stylelint",
  ".stylelintrc.mjs": "stylelint",
  ".stylish-haskell.yaml": "stylish_haskell",
  ".svnignore": "subversion",
  "package.pins": "swift",
  "symfony.lock": "symfony",
  "windi.config.ts": "windi",
  "windi.config.js": "windi",
  "tailwind.js": "tailwind",
  "tailwind.coffee": "tailwind",
  "tailwind.ts": "tailwind",
  "tailwind.config.js": "tailwind",
  "tailwind.config.cjs": "tailwind",
  "tailwind.config.coffee": "tailwind",
  "tailwind.config.ts": "tailwind",
  ".testcaferc.json": "testcafe",
  ".tfignore": "tfs",
  "tox.ini": "tox",
  ".travis.yml": "travis",
  "tsconfig.json": "tsconfig",
  "tsconfig.app.json": "tsconfig",
  "tsconfig.base.json": "tsconfig",
  "tsconfig.common.json": "tsconfig",
  "tsconfig.dev.json": "tsconfig",
  "tsconfig.development.json": "tsconfig",
  "tsconfig.e2e.json": "tsconfig",
  "tsconfig.prod.json": "tsconfig",
  "tsconfig.production.json": "tsconfig",
  "tsconfig.server.json": "tsconfig",
  "tsconfig.spec.json": "tsconfig",
  "tsconfig.staging.json": "tsconfig",
  "tsconfig.test.json": "tsconfig",
  "tsconfig.tsd.json": "tsconfig",
  "tsconfig.node.json": "tsconfig",
  "tsconfig.lib.json": "tsconfig",
  "tsconfig.storybook.json": "tsconfig",
  "tslint.json": "tslint",
  "tslint.yaml": "tslint",
  "tslint.yml": "tslint",
  ".unibeautifyrc": "unibeautify",
  "unibeautify.config.js": "unibeautify",
  ".unibeautifyrc.js": "unibeautify",
  ".unibeautifyrc.json": "unibeautify",
  ".unibeautifyrc.yaml": "unibeautify",
  ".unibeautifyrc.yml": "unibeautify",
  vagrantfile: "vagrant",
  ".vimrc": "vim",
  ".gvimrc": "vim",
  ".vscodeignore": "vscode",
  "tasks.json": "vscode",
  "vscodeignore.json": "vscode",
  ".vuerc": "vueconfig",
  "vue.config.js": "vueconfig",
  "vue.config.ts": "vueconfig",
  "wallaby.json": "wallaby",
  "wallaby.js": "wallaby",
  "wallaby.ts": "wallaby",
  "wallaby.coffee": "wallaby",
  "wallaby.conf.json": "wallaby",
  "wallaby.conf.js": "wallaby",
  "wallaby.conf.ts": "wallaby",
  "wallaby.conf.coffee": "wallaby",
  ".wallaby.json": "wallaby",
  ".wallaby.js": "wallaby",
  ".wallaby.ts": "wallaby",
  ".wallaby.coffee": "wallaby",
  ".wallaby.conf.json": "wallaby",
  ".wallaby.conf.js": "wallaby",
  ".wallaby.conf.ts": "wallaby",
  ".wallaby.conf.coffee": "wallaby",
  ".watchmanconfig": "watchmanconfig",
  "wercker.yml": "wercker",
  "wpml-config.xml": "wpml",
  ".yamllint": "yamllint",
  ".yaspellerrc": "yandex",
  ".yaspeller.json": "yandex",
  "yarn.lock": "yarnlock",
  ".yarnrc": "yarn",
  ".yarn.installed": "yarn",
  ".yarnclean": "yarn",
  ".yarn-integrity": "yarn",
  ".yarn-metadata.json": "yarn",
  ".yarnignore": "yarnignore",
  ".yarnrc.yml": "yarn",
  ".yarnrc.yaml": "yarn",
  ".yarnrc.json": "yarn",
  ".yarnrc.json5": "yarn",
  ".yarnrc.cjs": "yarn",
  ".yarnrc.js": "yarn",
  ".yarnrc.lock": "yarn",
  ".yarnrc.txt": "yarn",
  "yarn-error.log": "yarnerror",

  ".yo-rc.json": "yeoman",
  "now.json": "vercel",
  ".nowignore": "vercel",
  "vercel.json": "vercel",
  ".vercel": "vercel",
  ".vercelignore": "vercel",
  "vite.config.js": "vite",
  "vite.config.mjs": "vite",
  "vite.config.cjs": "vite",
  "vite.config.ts": "vite",
  "vite.config.mts": "vite",
  "vite.config.cts": "vite",
  ".nvmrc": "nvm",
  "example.env": "env",
  ".env.staging": "env",
  ".env.sample": "env",
  ".env.preprod": "env",
  ".env.prod": "env",
  ".env.production": "env",
  ".env.local": "env",
  ".env.dev": "env",
  ".env.dev.local": "env",
  ".env.dev.prod": "env",
  ".env.dev.preprod": "env",
  ".env.dev.production": "env",
  ".env.dev.staging": "env",
  ".env.development": "env",
  ".env.example": "env",
  ".env.test": "env",
  ".env.dist": "env",
  ".env.default": "env",
  ".jinja": "jinja",
  "jenkins.yaml": "jenkins",
  "jenkins.yml": "jenkins",
  ".compodocrc": "compodoc",
  ".compodocrc.json": "compodoc",
  ".compodocrc.yaml": "compodoc",
  ".compodocrc.yml": "compodoc",
  "bsconfig.json": "bsconfig",
  ".clang-format": "llvm",
  ".clang-tidy": "llvm",
  ".parcelrc": "parcel",
  dune: "dune",
  "dune-project": "duneproject",
  ".adonisrc.json": "adonis",
  "astro.config.mjs": "astroconfig",
  "astro.config.js": "astroconfig",
  "astro.config.ts": "astroconfig",
  "svelte.config.js": "svelteconfig",
  "svelte.config.ts": "svelteconfig",
  ".tool-versions": "toolversions",
  "CMakeSettings.json": "cmake",
  "CMakeLists.txt": "cmake",
  "Cargo.toml": "cargo",
  "Cargo.lock": "cargolock",
  "pnpm-lock.yaml": "pnpmlock",
  "tauri.conf.json": "tauri",
  "tauri.linux.conf.json": "tauri",
  "tauri.windows.conf.json": "tauri",
  "tauri.macos.conf.json": "tauri",
  "next.config.js": "nextconfig",
  "next.config.mjs": "nextconfig",
  "next.config.ts": "nextconfig",
  "nextron.config.js": "nextron",
  "nextron.config.ts": "nextron",
  "poetry.toml": "poetry",
  "poetry.lock": "poetrylock",
  "pyproject.toml": "pyproject",
  "rustfmt.toml": "rustfmt",
  ".rustfmt.toml": "rustfmt",
  "cucumber.yml": "cucumber",
  "cucumber.yaml": "cucumber",
  "cucumber.js": "cucumber",
  "cucumber.ts": "cucumber",
  "cucumber.cjs": "cucumber",
  "cucumber.mjs": "cucumber",
  "cucumber.json": "cucumber",
  "flake.lock": "flakelock",
  ace: "ace",
  "ace-manifest.json": "acemanifest",
  "knexfile.js": "knex",
  "knexfile.ts": "knex",
  "launch.json": "launch",
  "redis.conf": "redis",
  "sequelize.js": "sequelize",
  "sequelize.ts": "sequelize",
  "sequelize.cjs": "sequelize",
  ".sequelizerc": "sequelize",
  ".sequelizerc.js": "sequelize",
  ".sequelizerc.json": "sequelize",
  "cypress.json": "cypress",
  "cypress.env.json": "cypress",
  "cypress.config.js": "cypress",
  "cypress.config.ts": "cypress",
  "cypress.config.cjs": "cypress",
  "playwright.config.ts": "playright",
  "playwright.config.js": "playright",
  "playwright.config.cjs": "playright",
  "vitest.config.ts": "vitest",
  "vitest.config.cts": "vitest",
  "vitest.config.mts": "vitest",
  "vitest.config.js": "vitest",
  "vitest.config.cjs": "vitest",
  "vitest.config.mjs": "vitest",
  "vite-env.d.ts": "viteenv",
  "vite-env.d.js": "viteenv",
  "pubspec.lock": "flutterlock",
  "pubspec.yaml": "flutter",
  ".packages": "flutterpackage",
  ".htaccess": "htaccess",
  "nx.json": "nx",
  "project.json": "nx",
  "v.mod": "vmod",
  "quasar.config.js": "quasar",
  "quasar.config.ts": "quasar",
  "quasar.config.cjs": "quasar",
  "quasar.config.mjs": "quasar",
  "quarkus.properties": "quarkus",
  "theme.properties": "ui",
  gradlew: "gradle",
  "gradle-wrapper.properties": "gradle",
  "gradlew.bat": "gradlebat",
  "makefile.win": "makefile",
  makefile: "makefile",
  make: "makefile",
  version: "version",
  server: "sql",
  migrate: "sql",
  ".commitlintrc": "commitlint",
  ".commitlintrc.json": "commitlint",
  ".commitlintrc.yaml": "commitlint",
  ".commitlintrc.yml": "commitlint",
  ".commitlintrc.js": "commitlint",
  ".commitlintrc.cjs": "commitlint",
  ".commitlintrc.ts": "commitlint",
  ".commitlintrc.cts": "commitlint",
  "commitlint.config.js": "commitlint",
  "commitlint.config.cjs": "commitlint",
  "commitlint.config.ts": "commitlint",
  "commitlint.config.cts": "commitlint",
  ".terraform-version": "terraformversion",
  TerraFile: "terrafile",
  "tfstate.backup": "terraform",
  ".code-workspace": "codeworkspace",
  "hardhat.config.js": "hardhat",
  "hardhat.config.ts": "hardhat",
  "hardhat.config.cts": "hardhat",
  "hardhat.config.cjs": "hardhat",
  "hardhat.config.mjs": "hardhat",
  "taze.config.js": "taze",
  "taze.config.ts": "taze",
  "taze.config.cjs": "taze",
  "taze.config.mjs": "taze",
  ".tazerc.json": "taze",
  "turbo.json": "turbo",
  "uno.config.ts": "unocss",
  "uno.config.js": "unocss",
  "uno.config.mjs": "unocss",
  "uno.config.mts": "unocss",
  "unocss.config.ts": "unocss",
  "unocss.config.js": "unocss",
  "unocss.config.mjs": "unocss",
  "unocss.config.mts": "unocss",
  "atomizer.config.js": "atomizer",
  "atomizer.config.cjs": "atomizer",
  "atomizer.config.mjs": "atomizer",
  "atomizer.config.ts": "atomizer",
  "esbuild.js": "esbuild",
  "esbuild.mjs": "esbuild",
  "esbuild.cjs": "esbuild",
  "esbuild.ts": "esbuild",
  "mix.exs": "mix",
  "mix.lock": "mixlock",
  ".DS_Store": "dsstore",
  "remix.config.js": "remix",
  "remix.config.cjs": "remix",
  "remix.config.mjs": "remix",
  "remix.config.ts": "remix",
  "xmake.lua": "xmake",
  ".sailsrc": "sails",
  "farm.config.ts": "farm",
  "farm.config.js": "farm",
  "bunfig.toml": "bun",
  ".bunfig.toml": "bun",
  "bun.lockb": "bunlock",
  ".air.toml": "air",
  "rome.json": "rome",
  "biome.json": "biome",
  "bicepconfig.json": "bicepparam",
  "drizzle.config.ts": "drizzle",
  "drizzle.config.js": "drizzle",
  "drizzle.config.json": "drizzle",
  "panda.config.ts": "panda",
  "panda.config.js": "panda",
  "panda.config.json": "panda",
  "panda.config.cjs": "panda",
  "panda.config.mjs": "panda",
  "panda.config.cts": "panda",
  "panda.config.mts": "panda",
  ".buckconfig": "buck",
  "Ballerina.toml": "ballerinaconfig",
  "todo.md": "todo",
  ".todo.md": "todo",
  "todo.txt": "todo",
  ".todo.txt": "todo",
  todo: "todo",
};
