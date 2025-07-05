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
        additionalData: `@import "src/sass/base/variables.scss"; @import "src/sass/base/mixins.scss";`
      }
    }
  }
}) 