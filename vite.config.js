import { defineConfig } from 'vite'

export default defineConfig({
  // Vanilla HTML project -- no framework plugins needed
  // index.html is the entry point by default
  build: {
    outDir: 'dist',
  },
})
