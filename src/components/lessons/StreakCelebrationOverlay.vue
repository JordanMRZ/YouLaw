<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import FireworksCanvas from './FireworksCanvas.vue'
import DancingLawyerAvatar from './DancingLawyerAvatar.vue'

const emit = defineEmits(['close'])

const remainingSeconds = ref(7)
let timer = null

function playVictoryChime() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext
    if (!AudioCtx) return
    const ctx = new AudioCtx()

    const notes = [
      { freq: 523.25, time: 0.0, dur: 0.15 }, // C5
      { freq: 659.25, time: 0.12, dur: 0.15 }, // E5
      { freq: 783.99, time: 0.24, dur: 0.18 }, // G5
      { freq: 1046.50, time: 0.38, dur: 0.45 }, // C6
    ]

    notes.forEach(({ freq, time, dur }) => {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.type = 'triangle'
      osc.frequency.setValueAtTime(freq, ctx.currentTime + time)

      gain.gain.setValueAtTime(0, ctx.currentTime + time)
      gain.gain.linearRampToValueAtTime(0.28, ctx.currentTime + time + 0.04)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + time + dur)

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start(ctx.currentTime + time)
      osc.stop(ctx.currentTime + time + dur + 0.05)
    })
  } catch {
    // Audio might be blocked if no user interaction yet, silently ignore
  }
}

function handleClose() {
  if (timer) clearInterval(timer)
  emit('close')
}

onMounted(() => {
  playVictoryChime()
  timer = setInterval(() => {
    remainingSeconds.value--
    if (remainingSeconds.value <= 0) {
      handleClose()
    }
  }, 1000)
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <div class="streak-celebration-overlay" role="dialog" aria-modal="true" aria-label="Celebración de 5 respuestas correctas">
    <!-- Fireworks Canvas background -->
    <FireworksCanvas />

    <!-- Backdrop Tint -->
    <div class="celebration-backdrop" @click="handleClose"></div>

    <!-- Main Content Box -->
    <div class="celebration-card">
      <div class="celebration-top-glow" aria-hidden="true"></div>

      <!-- Streak Badge -->
      <div class="streak-title-wrap">
        <span class="fire-badge">🔥🔥🔥🔥🔥</span>
        <h1 class="celebration-heading">¡5 ACIERTOS SEGUIDOS!</h1>
        <p class="celebration-subheading">
          ¡Dominio absoluto del caso! Sumaste <strong class="xp-bonus">+25 XP de Bonificación</strong> por tu racha perfecta.
        </p>
      </div>

      <!-- Dancing Lawyer Stage (Dancing Across) -->
      <div class="dancing-stage">
        <div class="lawyer-motion-wrapper">
          <DancingLawyerAvatar />
        </div>
      </div>

      <!-- Action Button -->
      <div class="celebration-actions">
        <button class="celebration-continue-btn" type="button" @click="handleClose">
          <span>¡Continuar lección!</span>
          <span class="btn-arrow">→</span>
        </button>
        <span class="auto-advance-hint">Continuando automáticamente en {{ remainingSeconds }}s…</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.streak-celebration-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  overflow: hidden;
}

.celebration-backdrop {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(15, 23, 42, 0.75) 0%, rgba(10, 15, 29, 0.92) 100%);
  backdrop-filter: blur(8px);
  animation: fadeIn 0.4s ease forwards;
}

.celebration-card {
  position: relative;
  z-index: 10;
  width: min(520px, 94vw);
  background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
  border: 3px solid rgba(251, 191, 36, 0.4);
  border-bottom-width: 6px;
  border-radius: 28px;
  padding: 28px 24px 22px;
  text-align: center;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 40px rgba(245, 158, 11, 0.25);
  animation: cardPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  color: #ffffff;
}

.celebration-top-glow {
  position: absolute;
  top: -2px;
  left: 15%;
  right: 15%;
  height: 4px;
  background: linear-gradient(90deg, transparent, #fbbf24, #f59e0b, transparent);
  border-radius: 999px;
  filter: blur(1px);
}

.fire-badge {
  font-size: 26px;
  letter-spacing: 4px;
  display: block;
  margin-bottom: 6px;
  animation: flamePulse 1s ease-in-out infinite alternate;
}

.celebration-heading {
  font-size: clamp(22px, 5vw, 30px);
  font-weight: 900;
  margin: 0 0 8px;
  background: linear-gradient(135deg, #fef08a 0%, #f59e0b 50%, #fb923c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 4px 20px rgba(245, 158, 11, 0.3);
  letter-spacing: -0.5px;
}

.celebration-subheading {
  color: #cbd5e1;
  font-size: 14.5px;
  line-height: 1.45;
  margin: 0 auto 16px;
  max-width: 400px;
}

.xp-bonus {
  color: #fbbf24;
  font-weight: 800;
}

/* Dancing Stage with lateral swaying animation */
.dancing-stage {
  position: relative;
  width: 100%;
  height: 290px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  margin-bottom: 12px;
}

.lawyer-motion-wrapper {
  animation: lawyerSwayAcross 3.5s ease-in-out infinite alternate;
}

/* Actions */
.celebration-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.celebration-continue-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  max-width: 320px;
  padding: 14px 28px;
  background: linear-gradient(180deg, #10b981 0%, #059669 100%);
  color: #ffffff;
  font-size: 16px;
  font-weight: 900;
  border: none;
  border-bottom: 4px solid #047857;
  border-radius: 16px;
  cursor: pointer;
  box-shadow: 0 8px 20px -4px rgba(16, 185, 129, 0.4);
  transition: transform 0.12s ease, filter 0.12s ease;
}

.celebration-continue-btn:hover {
  filter: brightness(1.08);
  transform: translateY(-2px);
}

.celebration-continue-btn:active {
  transform: translateY(2px);
  border-bottom-width: 2px;
}

.btn-arrow {
  font-size: 18px;
  transition: transform 0.15s ease;
}

.celebration-continue-btn:hover .btn-arrow {
  transform: translateX(4px);
}

.auto-advance-hint {
  font-size: 12px;
  color: #94a3b8;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes cardPop {
  0% {
    opacity: 0;
    transform: scale(0.7) translateY(40px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes flamePulse {
  0% { transform: scale(0.95); filter: drop-shadow(0 0 2px #f59e0b); }
  100% { transform: scale(1.08); filter: drop-shadow(0 0 10px #ef4444); }
}

/* Lawyer gently sways/dances across the stage */
@keyframes lawyerSwayAcross {
  0% {
    transform: translateX(-40px) rotate(-3deg);
  }
  50% {
    transform: translateX(0px) rotate(2deg) translateY(-8px);
  }
  100% {
    transform: translateX(40px) rotate(-3deg);
  }
}
</style>

