<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const hostEl = ref(null)
let teardown = null

onMounted(async () => {
  const { mountInteractiveGame } = await import('../../interactive-game/mount.tsx')
  if (hostEl.value) teardown = mountInteractiveGame(hostEl.value)
})

onUnmounted(() => {
  teardown?.()
  teardown = null
})
</script>

<template>
  <div ref="hostEl" class="didactic-game-host" />
</template>
