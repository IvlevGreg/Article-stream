module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
    'plugin:css-modules/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
    'react-hooks',
    'css-modules',
  ],
  rules: {
    'linebreak-style': ['error', 'unix'],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    indent: [2, 2],
    'react/jsx-filename-extension': [2,
      { extensions: ['.js', '.jsx', '.tsx'] }],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 0,
    'no-undef': 0,
    'react/jsx-max-props-per-line': [2, { maximum: 1, when: 'always' }],
    '@typescript-eslint/no-unused-vars': [2, { argsIgnorePattern: '^_' }],
    'no-console': 'warn',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'i18next/no-literal-string': ['error',
      { markupOnly: true, onlyAttribute: [''] }],
    'max-len': ['error', { code: 120, ignoreComments: true }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    // убрать после рефакторинга
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'no-param-reassign': 'off',

    // TODO: отрефачить и перевести на ошибку
    'css-modules/no-unused-class': [1, { camelCase: true }],
    'css-modules/no-undef-class': [1, { camelCase: true }],

    'no-undef-init': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    'max-statements': 'off',
    'arrow-body-style': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/jsx-handler-names': 'off',

    '@typescript-eslint/no-invalid-void-type': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'eslint-comments/disable-enable-pair': 0,
    'eslint-comments/no-unlimited-disable': 0,
    'max-nested-callbacks': ['error', 7], // was extends for tests only
    '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
        'max-len': 'off',
      },
    },
  ],
};
