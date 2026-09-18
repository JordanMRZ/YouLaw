<script setup>
import { computed } from 'vue'

const props = defineProps({
  userName: { type: String, default: 'Docente' },
  showLives: { type: Boolean, default: false },
  lives: { type: Number, default: 3 },
  maxLives: { type: Number, default: 3 },
  lifeShake: { type: Boolean, default: false },
  isLocked: { type: Boolean, default: false },
  lockRemainingSeconds: { type: Number, default: 0 },
})

const hearts = computed(() => Array.from({ length: props.maxLives }, (_, index) => index < props.lives))
const lockLabel = computed(() => {
  if (!props.isLocked) return 'Listo'
  const minutes = Math.floor(props.lockRemainingSeconds / 60)
  const seconds = props.lockRemainingSeconds % 60
  return `${minutes}:${String(seconds).padStart(2, '0')}`
})
</script>

<template>
  <header class="topbar">
    <div><p class="eyebrow">YOULAW</p><h1>Hola, {{ userName }} <span class="wave">✋</span></h1><p class="intro">Un pequeño paso cada día te acerca a hablar con confianza.</p></div>
    <div class="top-actions">
      <button class="icon-button" type="button" aria-label="Notificaciones">♢<span class="notification-dot"></span></button>
      <div v-if="showLives" class="lives-pill" :class="{ shake: lifeShake, locked: isLocked }">
        <span class="lives-label">{{ isLocked ? 'Bloqueada' : 'Vidas' }}</span>
        <div class="lives-hearts" aria-label="Vidas disponibles">
          <span v-for="(hasLife, index) in hearts" :key="index" class="life-heart" :class="{ lost: !hasLife }">♥</span>
        </div>
        <span v-if="isLocked" class="lock-timer">{{ lockLabel }}</span>
      </div>
      <div class="streak-pill"><span>♨</span><strong>5</strong><small>días</small></div>
    </div>
  </header>
</template>
