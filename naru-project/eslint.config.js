import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { files: ["**/*.{js,mjs,cjs,jsx}"], languageOptions: { globals: globals.browser } },
  {
    files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js }, extends: ["js/recommended"],
    rules: {
      semi: ["error", "always"],           // 세미콜론 붙이기
      quotes: ["error", "double"],         // 쌍따옴표
      "react/react-in-jsx-scope": "off",   // React 17+ JSX scope 경고 끄기
      "no-unused-vars": "warn",            // 사용 안한 변수 경고
    },
  },
  pluginReact.configs.flat.recommended,
]);