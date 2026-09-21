import { spawnSync } from 'node:child_process'
import { createRequire } from 'node:module'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const require = createRequire(import.meta.url)

/** Paquetes que suelen faltar si alguien clonó sin `npm install`. */
const required = [
  '@hugeicons/core-free-icons',
  '@hugeicons/vue',
  'vite',
  'vue',
  'react',
  'react-dom',
]

function depsReady() {
  return required.every((name) => {
    try {
      require.resolve(name)
      return true
    } catch {
      return false
    }
  })
}

function runInstall() {
  console.log('\n[YouLaw] Instalando dependencias (primera vez o tras un pull)…\n')
  const result = spawnSync('npm', ['install'], {
    cwd: root,
    stdio: 'inherit',
    env: process.env,
    shell: process.platform === 'win32',
  })
  if (result.status !== 0) {
    console.error('\n[YouLaw] `npm install` falló. Revisa Node (v22+) y tu conexión.\n')
    process.exit(result.status ?? 1)
  }
}

if (!depsReady()) {
  runInstall()
}

if (!depsReady()) {
  console.error(
    '\n[YouLaw] Siguen faltando paquetes. Desde la raíz del repo ejecuta: npm install\n',
  )
  process.exit(1)
}
