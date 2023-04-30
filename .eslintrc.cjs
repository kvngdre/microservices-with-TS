module.exports = {
  // parser: '@typescript-eslint/parser',
  env: {
    es2021: true,
    node: true
  },
  extends: ['plugin:@typescript-eslint/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  ignorePatterns: ["**/*.js"],
  rules: {
    semi: 'error',
    indent: ['error', 2],
    '@typescript-eslint/explicit-function-return-type': 'error'
  }
};
