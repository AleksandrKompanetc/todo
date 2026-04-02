import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'   // ← добавь это

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),     // ← вот сюда
  ],
})
