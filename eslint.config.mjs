import pluginJs from "@eslint/js";

import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

import globals from "globals";

import tseslint from "typescript-eslint";

export default [
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/build/**",
      "**/coverage/**",
    ],
  },

  { files: ["**/*.{js,mjs,cjs,ts}"] },

  pluginJs.configs.recommended,

  ...tseslint.configs.recommended,

  ...tseslint.configs.recommendedTypeChecked,

  {
    languageOptions: {
      globals: { ...globals.node },

      parser: tseslint.parser,

      parserOptions: {
        project: ["tsconfig.root.json", "./packages/*/tsconfig.json"],

        useProjectService: true,

        tsconfigRootDir: import.meta.dirname,

        allowDefaultProject: true,
      },
    },
  },

  ...tseslint.configs.stylisticTypeChecked,

  eslintPluginPrettierRecommended,

  {
    rules: {
      "@typescript-eslint/dot-notation": ["error", { allowKeywords: true }],

      "@typescript-eslint/no-empty-function": [
        "error",
        { allow: ["arrowFunctions"] },
      ],

      "@typescript-eslint/no-explicit-any": "off",

      "prettier/prettier": ["error", { endOfLine: "crlf" }],
    },
  },
];
