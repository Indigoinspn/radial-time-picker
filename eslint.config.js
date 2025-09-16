// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';
import perfectionist from 'eslint-plugin-perfectionist';

export default [
  {
    ignores: ['node_modules/', 'dist/', 'public/', '**/*.config.js', 'webpack.config.js', 'eslint.config.js'],
  },

  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 2022,
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      '@typescript-eslint': ts,
      prettier,
      import: importPlugin,
      perfectionist,
    },
    rules: {
      'max-len': 'off',
      // Prettier
      'prettier/prettier': 'error',

      // TypeScript
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',

      // Сортировка импортов
      'import/order': [
        'error',
        {
          groups: [
            'builtin', // Node.js built-ins (fs, path)
            'external', // сторонние библиотеки (react, styled-components)
            'internal', // абсолютные импорты (если есть @/)
            'parent', // ../
            'sibling', // ./
            'index', // index imports
            'object', // импорты вида import React from 'react'
            'type', // type imports
          ],
          'newlines-between': 'never', // 👈 ВОТ КЛЮЧЕВАЯ НАСТРОЙКА — НИКАКИХ ПУСТЫХ СТРОК
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'import/newline-after-import': 'on', // отключаем принудительную пустую строку после импортов

      // Сортировка ключей объекта
      'perfectionist/sort-objects': [
        'error',
        {
          type: 'natural',
          order: 'asc',
          partitionByComment: true,
        },
      ],

      // React
      'react/react-in-jsx-scope': 'off', // для React 17+
      'react/prop-types': 'off', // TypeScript сам проверяет пропсы

      // React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
