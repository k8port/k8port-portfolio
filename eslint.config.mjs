import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import prettier from "eslint-plugin-prettier";
import tsEslintPlugin from "@typescript-eslint/eslint-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: ["node_modules/**", ".next/**", "out/**"]
  },
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier", "plugin:react/recommended", "plugin:@typescript-eslint/recommended"),
  {
    plugins: {
      prettier: prettier,
      '@typescript-eslint': tsEslintPlugin,
    },
    rules: {
      // Add prettier rule
      "prettier/prettier": "error",
      // Basic formatting rules
      "indent": ["error", 2],
      "linebreak-style": ["error", "unix"],
      "quotes": ["error", "single", { "avoidEscape": true }],
      "semi": ["error", "always"],
      // React specific formatting
      "react/jsx-indent": ["error", 2],
      "react/jsx-indent-props": ["error", 2],
      // TypeScript specific formatting
      "@typescript-eslint/type-annotation-spacing": "error"
    }
  }
];

export default eslintConfig;
