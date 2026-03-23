import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'

import vue from 'eslint-plugin-vue'
import vuetify from 'eslint-plugin-vuetify'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],

  {
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
  ...vue.configs['flat/base'],
  ...vuetify.configs['flat/base'],
]
