import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],

  // 👇 This enables proper route handling on refresh or direct URL hits
  resolve: {
    alias: {}
  },
})
