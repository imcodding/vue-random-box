import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
      '/@': path.resolve(__dirname, './src'),
      '/@views': path.resolve(__dirname, './src/views'),
      '/@components': path.resolve(__dirname, './src/components'),
      '/@compositions': path.resolve(__dirname, './src/compositions'),
      '/@router': path.resolve(__dirname, './src/router'),
    },
  },
  plugins: [vue()],
})
