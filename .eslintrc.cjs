module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: ['plugin:@typescript-eslint/recommended'],
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.mts', '*.cts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'error'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  // ignorePatterns: ['**/*.js'],
  rules: {
    semi: ['error', 'never'],
    indent: ['error', 2],
    quotes: ['error', 'single'],
  }
}
