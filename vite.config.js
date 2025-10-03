import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    minify: 'esbuild', // hoặc 'terser'
    cssMinify: true    // ép Vite minify CSS
  },
  plugins: [react()],
})
