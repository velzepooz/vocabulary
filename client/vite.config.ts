import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy(),
    VitePWA({
      includeAssets: ['favicon.png', 'apple-touch-icon.png'],
      manifest: {
        name: 'Vocabulary App',
        short_name: 'Vocabulary',
        description: 'Vocabulary app',
        theme_color: '#ffffff',
        icons: [
          { src: '/favicon.ico', 'type': 'image/x-icon', sizes: '16x16 32x32' },
          { src: '/icon-192.png', 'type': 'image/png', sizes: '192x192' },
          { src: '/icon-512.png', 'type': 'image/png', sizes: '512x512' },
          { src: '/icon-192-maskable.png', type: 'image/png', sizes: '192x192', purpose: 'maskable' },
          { src: '/icon-512-maskable.png', type: 'image/png', sizes: '512x512', purpose: 'maskable' }
        ]
      },
      registerType: 'autoUpdate',
      devOptions: {
        enabled: false
      }
    }),
  ],
})
