import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0', // Listens on all interfaces for USB / ADB connections
    port: 3001,
    strictPort: true,
    open: false
  },
  build: {
    target: 'esnext',
    chunkSizeWarningLimit: 1000
  }
});
