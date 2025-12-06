import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  server: {
    host: true,
    port: 5173,
  },
  preview: {
    port: 4173,
    host: true,
  },
  build: {
    outDir: 'dist',
  },
  // 👇 This enables proper route handling on refresh or direct URL hits
  resolve: {
    alias: {}
  },
})
