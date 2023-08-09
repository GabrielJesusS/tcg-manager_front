module.exports = {
  settings: {
    react: {
      version: "latest",
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:@next/next/recommended",
    "plugin:react/recommended",
    "standard-with-typescript",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint", "jest"],
  rules: {
    // We will use TypeScript's types for component props instead
    "react/prop-types": "off",
    "@typescript-eslint/consistent-type-assertions": "off",
    // No need to import React when using Next.js
    "react/react-in-jsx-scope": "off",

    "@next/next/no-img-element": "off",
    "@typescript-eslint/consistent-type-imports" : "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@next/next/no-html-link-for-pages": ["error", "source/presentation"],
    "@typescript-eslint/no-unused-vars": [
      "warn", // or "error"
      { 
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "caughtErrorsIgnorePattern": "^_"
      }
    ],
  },
  ignorePatterns: [".eslintrc.js"],
};
