<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useAuth } from '../../composables/useAuth'

const hostEl = ref(null)
const { user } = useAuth()
const loadState = ref('loading')
let teardown = null
let bootTimeout = null

function gameUserContext() {
  return {
    userId: user.value?.userId ?? null,
    role: user.value?.role ?? null,
    canOpenEditor: Boolean(user.value?.canUseGameEditor),
  }
}

function clearBootTimeout() {
  if (bootTimeout) {
    window.clearTimeout(bootTimeout)
    bootTimeout = null
  }
}

function markReady() {
  clearBootTimeout()
  loadState.value = 'ready'
}

async function mountGame() {
  loadState.value = 'loading'
  clearBootTimeout()
  bootTimeout = window.setTimeout(() => {
    if (loadState.value === 'loading') markReady()
  }, 45000)

  try {
    const { setGameCanvasReadyListener } = await import('../../interactive-game/gameBoot.ts')
    setGameCanvasReadyListener(() => markReady())
    const { mountInteractiveGame } = await import('../../interactive-game/mount.tsx')
    if (!hostEl.value) return
    if (teardown) {
      teardown()
      teardown = null
    }
    teardown = mountInteractiveGame(hostEl.value, gameUserContext())
  } catch {
    clearBootTimeout()
    loadState.value = 'error'
  }
}

watch(
  () => [user.value?.userId, user.value?.canUseGameEditor],
  () => {
    if (!teardown) return
    import('../../interactive-game/mount.tsx').then(({ updateInteractiveGameUser }) => {
      updateInteractiveGameUser(gameUserContext())
    })
  },
)

onMounted(() => {
  mountGame()
})

onUnmounted(() => {
  clearBootTimeout()
  import('../../interactive-game/gameBoot.ts').then(({ setGameCanvasReadyListener }) => {
    setGameCanvasReadyListener(null)
  })
  teardown?.()
  teardown = null
})
</script>

<template>
  <div class="didactic-game-host-wrap">
    <div
      v-if="loadState === 'loading'"
      class="game-boot-loader"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div class="game-boot-spinner" aria-hidden="true" />
      <p class="game-boot-title">Cargando juego</p>
      <p class="game-boot-hint">Preparando la escena 3D…</p>
    </div>
    <div v-else-if="loadState === 'error'" class="game-boot-loader game-boot-loader--error" role="alert">
      <p class="game-boot-title">No se pudo cargar el juego</p>
      <p class="game-boot-hint">Revisa tu conexión e intenta de nuevo.</p>
      <button type="button" class="game-boot-retry" @click="mountGame">Reintentar</button>
    </div>
    <div ref="hostEl" class="didactic-game-host" :class="{ 'didactic-game-host--hidden': loadState !== 'ready' }" />
  </div>
</template>

<style scoped>
.didactic-game-host-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
}

.didactic-game-host {
  width: 100%;
  height: 100%;
}

.didactic-game-host--hidden {
  visibility: hidden;
  pointer-events: none;
}

.game-boot-loader {
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 24px;
  text-align: center;
  background: linear-gradient(165deg, #0f2438 0%, #102030 45%, #0d1a28 100%);
  color: #e8f4fa;
}

.game-boot-loader--error {
  gap: 14px;
}

.game-boot-spinner {
  width: 44px;
  height: 44px;
  border: 3px solid rgba(255, 255, 255, 0.12);
  border-top-color: var(--coral, #ff6b4a);
  border-radius: 50%;
  animation: game-boot-spin 0.85s linear infinite;
}

.game-boot-title {
  margin: 8px 0 0;
  font: 600 16px 'Space Grotesk', system-ui, sans-serif;
  letter-spacing: -0.02em;
}

.game-boot-hint {
  margin: 0;
  font-size: 13px;
  color: rgba(232, 244, 250, 0.72);
  max-width: 260px;
  line-height: 1.45;
}

.game-boot-retry {
  margin-top: 4px;
  padding: 10px 18px;
  border: 0;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  color: #102030;
  background: linear-gradient(180deg, #ffd166, #e9c46a);
}

@keyframes game-boot-spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
