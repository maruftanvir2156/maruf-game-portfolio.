import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  root: './',
  css: {
    postcss: {}
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});
