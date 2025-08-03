import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { analyzer } from 'vite-bundle-analyzer'

import { tanstackRouter } from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({ autoCodeSplitting: true, target: 'react' }),
    viteReact(),
    tailwindcss(),
    analyzer(),
  ],
  build: {
    chunkSizeWarningLimit: 14,
    rollupOptions: {
      output: {
        // manualChunks: () => {
        manualChunks: (moduleId) => {
          if (moduleId.includes('tanstack+router')) {
            return '@tanstack-router'
          }
          if (moduleId.includes('tanstack+react-router')) {
            return '@tanstack-react-router'
          }
          if (moduleId.includes('tanstack+query')) {
            return '@tanstack-query'
          }
          if (moduleId.includes('react-dom')) {
            return '@react-dom'
          }
          if (moduleId.includes('react')) {
            return '@react'
          }
          return null
        }
      }
    }
  },
  // test: {
  //   globals: true,
  //   environment: 'jsdom',
  // },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
