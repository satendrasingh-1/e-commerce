import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import reactPlugin from "eslint-plugin-react";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    ignores: ["node_modules", ".next"],
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,   // ✅ allow JSX
        },
      },
    },
    plugins: {
      "@next/next": nextPlugin,
      react: reactPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      ...reactPlugin.configs.recommended.rules,
    },
    settings: {
      react: {
        version: "detect", // ✅ auto-detect React version
      },
    },
  },
];



// // import { dirname } from "path";
// // import { fileURLToPath } from "url";
// // import { FlatCompat } from "@eslint/eslintrc";

// // const __filename = fileURLToPath(import.meta.url);
// // const __dirname = dirname(__filename);

// // const compat = new FlatCompat({
// //   baseDirectory: __dirname,
// // });

// // const eslintConfig = [...compat.extends("next/core-web-vitals")];

// // export default eslintConfig;


// import nextPlugin from "@next/eslint-plugin-next";

// /** @type {import("eslint").Linter.FlatConfig[]} */
// export default [
//   {
//     ignores: ["node_modules", ".next"],
//   },
//   {
//     files: ["**/*.{js,jsx,ts,tsx}"],
//     plugins: {
//       "@next/next": nextPlugin,
//     },
//     rules: {
//       ...nextPlugin.configs["core-web-vitals"].rules,
//     },
//   },
// ];
