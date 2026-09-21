import { createRequire } from 'node:module'
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import react from '@vitejs/plugin-react'

const require = createRequire(import.meta.url)

function resolvePackageEntry(name) {
  try {
    return require.resolve(name)
  } catch {
    return null
  }
}

const hugeiconsCore = resolvePackageEntry('@hugeicons/core-free-icons')
const hugeiconsVue = resolvePackageEntry('@hugeicons/vue')

if (!hugeiconsCore || !hugeiconsVue) {
  console.warn(
    '[YouLaw] HugeIcons no está instalado. Ejecuta `npm ci` en la raíz del proyecto antes de `npm run dev`.',
  )
}

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
      ...(hugeiconsCore ? { '@hugeicons/core-free-icons': hugeiconsCore } : {}),
      ...(hugeiconsVue ? { '@hugeicons/vue': hugeiconsVue } : {}),
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
