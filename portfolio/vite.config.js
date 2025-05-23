import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    devSourcemap: true
  },
  optimizeDeps: {
    include: ['@vueuse/core', '@vueuse/motion'],
  },
})
