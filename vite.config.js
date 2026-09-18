import { fileURLToPath, URL } from 'node:url'
import { existsSync } from 'node:fs'
import path from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import react from '@vitejs/plugin-react'

const rootDir = fileURLToPath(new URL('.', import.meta.url))
const hugeiconsCore = path.join(rootDir, 'node_modules/@hugeicons/core-free-icons/dist/esm/index.js')
const hugeiconsVue = path.join(rootDir, 'node_modules/@hugeicons/vue/dist/esm/index.js')

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    react({
      include: /\.(jsx|tsx)$/,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      ...(existsSync(hugeiconsCore)
        ? { '@hugeicons/core-free-icons': hugeiconsCore }
        : {}),
      ...(existsSync(hugeiconsVue) ? { '@hugeicons/vue': hugeiconsVue } : {}),
    },
  },
  assetsInclude: ['**/*.wasm'],
  optimizeDeps: {
    include: ['@react-three/rapier', '@hugeicons/vue', '@hugeicons/core-free-icons'],
  },
  build: {
    target: 'es2022',
    chunkSizeWarningLimit: 2000,
  },
})
