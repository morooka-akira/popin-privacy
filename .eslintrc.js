module.exports = {
  settings: {
    react: {
      // @ts-ignore
      version: require('./package.json').dependencies.react,
    },
  },
  parserOptions: {
    sourceType: 'module',
    extraFileExtensions: ['.tsx'],
    tsconfigRootDir: '.',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier',
    'plugin:prettier/recommended', // ESLintとPretterとの競合を除去
    'prettier/@typescript-eslint', // ESLintでTypescriptのlintをする
    'plugin:react/recommended', // Reactのlint
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'error',
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        singleQuote: true,
        semi: false,
        tabWidth: 2,
        trailingComma: 'es5',
      },
    ],
  },
}
