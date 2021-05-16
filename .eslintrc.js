/*
👋 Hi! This file was autogenerated by tslint-to-eslint-config.
https://github.com/typescript-eslint/tslint-to-eslint-config

It represents the closest reasonable ESLint configuration to this
project's original TSLint configuration.

We recommend eventually switching this configuration to extend from
the recommended rulesets in typescript-eslint.
https://github.com/typescript-eslint/tslint-to-eslint-config/blob/master/docs/FAQs.md

Happy linting! 💖
*/
module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
  },
  extends: ['eslint:recommended', 'plugin:import/errors', 'plugin:import/warnings', 'plugin:prettier/recommended', 'prettier'],
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  rules: {
    '@typescript-eslint/await-thenable': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-param-reassign': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/quotes': 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'arrow-parens': ['off', 'always'],
    'comma-dangle': [
      'off',
      {
        objects: 'always-multiline',
        arrays: 'always-multiline',
        functions: 'never',
      },
    ],
    curly: ['error', 'multi-line'],
    'default-case': 'error',
    'eol-last': 'error',
    eqeqeq: ['off', 'smart'],
    'id-blacklist': 'off',
    'id-match': 'off',
    'max-len': [
      'error',
      {
        code: 2500,
      },
    ],
    'no-cond-assign': 'error',
    'no-console': 'off',
    'no-constant-condition': 'error',
    'no-duplicate-imports': 'error',
    'no-empty': 'off',
    'no-eval': 'error',
    'no-extra-semi': 'error',
    'no-magic-numbers': 'off',
    'no-multiple-empty-lines': 'error',
    'no-new-wrappers': 'error',
    'no-return-await': 'error',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'off',
    'no-unsafe-finally': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'one-var': ['off', 'never'],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'prefer-object-spread': 'off',
    'prefer-template': 'error',
    'quote-props': ['off', 'as-needed'],
    radix: 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
      },
    ],
    'spaced-comment': [
      'off',
      'always',
      {
        markers: ['/'],
      },
    ],
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'getter-return': 'error',
    'no-prototype-builtins': 'error',
    'require-yield': 'error',
    'no-useless-escape': 'off',
    'no-case-declarations': 'off',
    'no-useless-catch': 'error',
    'no-extra-boolean-cast': 'error',
    'no-async-promise-executor': 'error',
    'import/export': 'error',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'keyword-spacing': 'error',
    'key-spacing': 'error',
  },
  overrides: [
    {
      files: [
        'src/admin_web/**',
        'laboratory/**',
        'migration/**',
        'src/lib/**',
        'dynamo/*',
        '**/__test__/**',
        'src/scripts/*',
        'src/test/**',
        'src/client_simulator/*',
        'src/scratcher_simulator/*',
      ],
      rules: {
        'no-console': 'off',
      },
    },
  ],
  ignorePatterns: ['gen/', 'nodemodules/'],
};
