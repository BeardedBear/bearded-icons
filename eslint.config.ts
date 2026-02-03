import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  stylistic.configs.customize({
    indent: 2,
    quotes: "double",
    semi: true,
    arrowParens: true,
    braceStyle: "1tbs",
    commaDangle: "always-multiline",
  }),
  {
    rules: {
      "@typescript-eslint/explicit-function-return-type": "warn",
      "@stylistic/max-len": ["warn", { code: 120 }],
      "@stylistic/quote-props": ["error", "as-needed"],
    },
  },
];
