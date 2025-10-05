import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react({
    include: '**/*.{jsx,tsx}', // Explicitly include JSX files
  })],
  base: '/wild-free-traveltribe/',
  build: {
    rollupOptions: {
      input: './index.html',
      output: {
        manualChunks: undefined // Force single bundle
      }
    }
  },
  // Force JSX processing
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  }
})