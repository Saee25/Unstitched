import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path" // <-- ADD THIS LINE

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/Unstitched",
  resolve: { // <-- ADD THIS ENTIRE 'resolve' BLOCK
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})