import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/~srijan2026/",
  plugins: [
    tailwindcss(),react()
  ],
})