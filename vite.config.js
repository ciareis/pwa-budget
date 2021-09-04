import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
const pkg = require('./package.json')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
      'src': path.resolve(__dirname, '/src'),
    },
  },
  define: {
    'process.env': {
      version: pkg.version
    }
  }
})
