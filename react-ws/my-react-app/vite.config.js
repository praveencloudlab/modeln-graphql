import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Custom port
    open: true, // Open browser on server start
  },
  build: {
    outDir: 'dist', // Custom output directory
    sourcemap: true, // Generate source maps
  },
  resolve: {
    alias: {
      '@': '/src', // Alias for src directory
    },
  },

})

