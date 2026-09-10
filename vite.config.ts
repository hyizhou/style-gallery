import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 7402,
    strictPort: true,
  },
  preview: {
    host: true,
    port: 7403,
    strictPort: true,
  },
})
