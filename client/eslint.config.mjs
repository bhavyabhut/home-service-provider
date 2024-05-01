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
      'react/prop-types': 'off',
      'react/jsx-filename-extension': [
        'off',
        {
          extensions: ['.jsx', '.tsx'],
        },
      ],
      'react/jsx-props-no-spreading': 'off',
      'react/function-component-definition': 'off',
      'no-underscore-dangle': 'off',
      'react/jsx-key': 'off',
      'no-shadow': 'off',
      'no-unused-vars': 'off',
      'react/destructuring-assignment': 'off',
      'react/jsx-no-useless-fragment': 'off',
      'react/no-unstable-nested-components': 'off',
      'react/no-unescaped-entities': 'off',
      'react/no-array-index-key': 'off',
      'no-undef': 'off',
    },

    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
