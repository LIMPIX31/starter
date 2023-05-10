import typescriptEslint from '@typescript-eslint/eslint-plugin'
import parser from '@typescript-eslint/parser'
import reactHooks from 'eslint-plugin-react-hooks'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default [
  prettierConfig,
  {
    files: ["**/*.{ts,tsx}"],
    ignores: ['.yarn/**'],
    plugins: {
      'react-hooks': reactHooks,
      '@typescript-eslint': typescriptEslint,
      'eslint-plugin-react-hooks': eslintPluginReactHooks,
      prettier,
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    settings: {
      react: {
        pragma: 'React',
        version: 'latest',
      },
      propWrapperFunctions: ['forbidExtraProps', 'exact', 'Object.freeze'],
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {},
      parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
          generators: true,
          objectLiteralDuplicateProperties: false,
        },
        ecmaVersion: 2022,
        sourceType: 'module',
      },
    },
    rules: {
      '@typescript-eslint/semi': ['error', 'never'],
      'import/prefer-default-export': 'off',
      'no-restricted-exports': 'off',
      'import/no-extraneous-dependencies': 'off',
      '@typescript-eslint/no-shadow': 'off',
    },
  },
]
