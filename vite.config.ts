import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    strictPort: false,
    allowedHosts: [
      'figures-modules-person-dreams.trycloudflare.com',
      '.trycloudflare.com'
    ],
    hmr: {
      clientPort: 443,
      protocol: 'wss',
    },
  },
})


