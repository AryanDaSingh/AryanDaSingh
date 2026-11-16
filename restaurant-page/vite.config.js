import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        dinner: resolve(__dirname, 'dinner/index.html'),
        lunch: resolve(__dirname, 'lunch/index.html'),
      },
    },
  },
})
