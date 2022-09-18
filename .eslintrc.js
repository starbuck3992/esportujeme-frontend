require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  plugins: [
    'vue', '@typescript-eslint', 'unused-imports', 'import',
  ],
  extends: [
    'eslint-config-google',
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-typescript',
  ],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'require-jsdoc': 'off',
    'vue/require-prop-types': 'error',
    'vue/require-default-prop': 'error',
    'import/no-duplicates': 'error',
    'unused-imports/no-unused-imports': 'error',
    'max-len': 'off',
    'vue/max-len': [
      'error',
      {
        'code': 120,
        'template': 1000,
        'ignoreTemplateLiterals': true,
        'ignoreUrls': true,
        'ignoreStrings': true,
      },
    ],
    'import/order': [
      'error', {
        'newlines-between': 'never',
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true,
        },
        'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        'pathGroups': [
          {
            pattern: '@/**',
            group: 'internal',
          },
        ],
      },
    ],
  },
};
