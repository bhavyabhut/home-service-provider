import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
export default [
  {
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        myCustomGlobal: 'readonly',
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReactConfig,
  {
    ignores: ['build/**'],
    rules: {
      'react-hooks/exhaustive-deps': 'off',
      'react/prop-types': 'off',
      'react/jsx-filename-extension': [
        'warn',
        {
          extensions: ['.jsx', '.tsx'],
        },
      ],
      'react/jsx-props-no-spreading': 'warn',
      'react/function-component-definition': 'off',
      'no-underscore-dangle': 'warn',
      'react/jsx-key': 'warn',
      'no-shadow': 'warn',
      'no-unused-vars': 'warn',
      'react/destructuring-assignment': 'warn',
      'react/jsx-no-useless-fragment': 'warn',
      'react/no-unstable-nested-components': 'warn',
      'react/no-unescaped-entities': 'warn',
      'react/no-array-index-key': 'warn',
      'no-undef': 'error',
    },

    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
