import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/',
  server: {
    allowedHosts: [
      'portfolio.khaledalmasri.eu',
      'localhost',
      '.khaledalmasri.eu'  // Allow all subdomains
    ]
  },
  css: {
    devSourcemap: true
  },
  optimizeDeps: {
    include: ['@vueuse/core', '@vueuse/motion'],
  },
})
