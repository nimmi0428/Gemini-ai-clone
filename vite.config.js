import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Gemini-ai-clone/',  // 👈 must match repo name
  plugins: [react()],
})
