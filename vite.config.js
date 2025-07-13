import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Removed additionalData to avoid conflicts with @use rules
      }
    }
  }
}) 