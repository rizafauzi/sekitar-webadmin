module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'unicorn'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  ignorePatterns: ['.eslintrc.js', 'handler.js'],

  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:unicorn/recommended',
    'plugin:sonarjs/recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:security/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  rules: {
    'react/default-props-match-prop-types': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'react/require-default-props': 'off',
    'unicorn/numeric-separators-style': 'off',
    'unicorn/prefer-array-some': 'off',
    'no-plusplus': 'off',
    'arrow-parens': 'off',
    'no-redeclare': 'off',
    'no-unused-vars': 'off',
    'consistent-return': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'operator-linebreak': 'off',
    'no-confusing-arrow': 'off',
    'object-curly-newline': 'off',
    'unicorn/no-null': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/no-array-for-each': 'off',
    'implicit-arrow-linebreak': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-wrap-multilines': 'off',
    'unicorn/numeric-separators-style': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'no-duplicate-imports': 'off',
    'security/detect-object-injection': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/no-redeclare': ['error'],
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-duplicate-imports': ['error'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE', 'snake_case'],
        leadingUnderscore: 'allow'
      }
    ],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info']
      }
    ],
    'unicorn/prevent-abbreviations': [
      'error',
      {
        allowList: {
          props: true,
          params: true,
          queryParams: true,
          getInitialProps: true
        }
      }
    ]
  }
}
