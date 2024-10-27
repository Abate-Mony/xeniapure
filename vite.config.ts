import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({
  plugins: [react(),
  VitePWA({
    manifest: {
      short_name: "ShipSharpCleaning",
      name: "ShipSharp Cleaning Services",
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#317EFB',
      icons: [
        {
          "src": "/main-logo.png",
          "sizes": "64x64",
          "type": "image/png"
        },
        {
          "src": "/main-logo.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "/main-logo.png",
          "sizes": "512x512",
          "type": "image/png"
        }
      ],
    }
  })

  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
