<script setup>
import { computed, onBeforeUnmount, onMounted } from 'vue'

const props = defineProps({
  lesson: { type: Object, required: true },
  exercise: { type: Object, required: true },
  exerciseIndex: { type: Number, required: true },
  exerciseCount: { type: Number, required: true },
  selectedAnswer: { type: String, default: null },
  answerStatus: { type: String, default: null },
  consecutiveCorrect: { type: Number, default: 0 },
  lives: { type: Number, default: 3 },
  isLocked: { type: Boolean, default: false },
  lockRemainingSeconds: { type: Number, default: 0 },
})

const emit = defineEmits(['answer', 'next', 'close'])

const progressPercentage = computed(() => {
  if (!props.exerciseCount) return 0
  return Math.min(100, Math.round(((props.exerciseIndex + 1) / props.exerciseCount) * 100))
})

function formatLockClock(value) {
  const minutes = Math.floor(value / 60)
  const seconds = value % 60
  return `${minutes}:${String(seconds).padStart(2, '0')}`
}

function handleOptionClick(option) {
  if (props.answerStatus) return // prevent changing once evaluated
  emit('answer', option)
}

function handleKeydown(event) {
  if (props.isLocked) return

  // If already answered, Enter or Space proceeds to next
  if (props.answerStatus) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      emit('next')
    }
    return
  }

  // Number keys 1, 2, 3... or A, B, C... to select option
  const options = props.exercise?.options || []
  if (['1', '2', '3', '4'].includes(event.key)) {
    const idx = parseInt(event.key, 10) - 1
    if (options[idx]) {
      event.preventDefault()
      emit('answer', options[idx])
    }
  } else if (['a', 'b', 'c', 'd', 'A', 'B', 'C', 'D'].includes(event.key)) {
    const idx = event.key.toLowerCase().charCodeAt(0) - 97
    if (options[idx]) {
      event.preventDefault()
      emit('answer', options[idx])
    }
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <Transition name="toast" appear>
    <div class="enhanced-lesson-modal" role="dialog" aria-modal="true">
      <button type="button" class="close-btn" aria-label="Cerrar lección" @click="$emit('close')">
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      <!-- LOCKED STATE WHEN LIVES ARE OUT -->
      <template v-if="isLocked">
        <div class="locked-container">
          <div class="locked-icon-bubble">⏱</div>
          <span class="locked-badge">PRUEBA BLOQUEADA</span>
          <h2 class="locked-title">Se agotaron tus vidas</h2>
          <p class="locked-desc">
            Tendrás que esperar <strong>{{ formatLockClock(lockRemainingSeconds) }}</strong> antes de continuar con la siguiente prueba.
          </p>
          <button class="primary-button modal-button" type="button" @click="$emit('close')">
            Volver al panel <span>→</span>
          </button>
        </div>
      </template>

      <!-- NORMAL EXERCISE STATE -->
      <template v-else>
        <!-- Top Status Bar -->
        <div class="modal-top-bar">
          <div class="top-meta-row">
            <span class="lesson-tag">⚖️ LECCIÓN {{ lesson.number }}</span>
            <div class="top-status-pills">
              <!-- Streak Pill -->
              <div class="status-pill streak-pill" :class="{ 'on-fire': consecutiveCorrect >= 3 }">
                <span class="flame-icon">🔥</span>
                <span class="pill-text">{{ consecutiveCorrect }}/5</span>
              </div>
              <!-- Lives Pill -->
              <div class="status-pill lives-pill">
                <span class="heart-icon">❤️</span>
                <span class="pill-text">{{ lives }}</span>
              </div>
            </div>
          </div>

          <!-- Progress Bar with percentage -->
          <div class="exercise-progress-track">
            <div class="exercise-progress-fill" :style="{ width: `${progressPercentage}%` }">
              <span class="progress-glow"></span>
            </div>
          </div>
          <div class="progress-subtext">
            <span>Ejercicio {{ exerciseIndex + 1 }} de {{ exerciseCount }}</span>
            <span>{{ progressPercentage }}%</span>
          </div>
        </div>

        <!-- Question Prompt Area -->
        <div class="prompt-box">
          <span class="prompt-category-badge">Práctica Legal</span>
          <h2 class="prompt-heading">{{ exercise.prompt }}</h2>
          <p class="prompt-tip">Selecciona la opción correcta en inglés para completar el caso.</p>
        </div>

        <!-- Answer Options -->
        <div class="enhanced-answer-list" role="radiogroup">
          <button
            v-for="(option, idx) in exercise.options"
            :key="option"
            type="button"
            class="enhanced-option-card"
            :class="{
              selected: selectedAnswer === option,
              correct: answerStatus && option === exercise.correctAnswer,
              incorrect: selectedAnswer === option && answerStatus === 'incorrect',
              disabled: Boolean(answerStatus) && selectedAnswer !== option && option !== exercise.correctAnswer
            }"
            :disabled="Boolean(answerStatus)"
            @click="handleOptionClick(option)"
          >
            <span class="option-letter">{{ String.fromCharCode(65 + idx) }}</span>
            <span class="option-text">{{ option }}</span>
            <span v-if="answerStatus && option === exercise.correctAnswer" class="option-badge check" aria-label="Correcta">✓</span>
            <span v-else-if="selectedAnswer === option && answerStatus === 'incorrect'" class="option-badge cross" aria-label="Incorrecta">✕</span>
          </button>
        </div>

        <!-- Bottom Feedback Panel -->
        <Transition name="fade-slide">
          <div v-if="answerStatus" class="feedback-panel" :class="answerStatus">
            <div class="feedback-info">
              <div class="feedback-icon-box">
                <span v-if="answerStatus === 'correct'">✨</span>
                <span v-else>💡</span>
              </div>
              <div class="feedback-text-content">
                <strong class="feedback-title">
                  {{ answerStatus === 'correct' ? '¡Excelente respuesta!' : 'Casi lo logras' }}
                </strong>
                <span v-if="answerStatus === 'correct'" class="feedback-detail">
                  +10 XP · ¡Argumento jurídico perfecto!
                  <span v-if="consecutiveCorrect > 1" class="streak-highlight">
                    🔥 ¡Racha de {{ consecutiveCorrect }}!
                  </span>
                </span>
                <span v-else class="feedback-detail">
                  Respuesta correcta: <strong>{{ exercise.correctAnswer }}</strong>
                </span>
              </div>
            </div>

            <button class="next-action-btn" type="button" @click="$emit('next')">
              <span>{{ exerciseIndex === exerciseCount - 1 ? 'Completar lección' : 'Continuar' }}</span>
              <span class="action-arrow">→</span>
              <kbd class="key-hint">↵</kbd>
            </button>
          </div>
        </Transition>
      </template>
    </div>
  </Transition>
</template>

<style scoped>
.enhanced-lesson-modal {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: min(540px, calc(100vw - 28px));
  background: var(--card, #ffffff);
  color: var(--ink, #1e293b);
  padding: 26px 24px 22px;
  border-radius: 28px;
  border: 2px solid var(--line, #e2e8f0);
  border-bottom-width: 6px;
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.2), 0 0 0 100vmax rgba(15, 23, 42, 0.45);
  z-index: 50;
  display: flex;
  flex-direction: column;
}

.close-btn {
  position: absolute;
  right: 16px;
  top: 16px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: transparent;
  border: none;
  color: #94a3b8;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease, transform 0.1s ease;
}

.close-btn:hover {
  background: rgba(148, 163, 184, 0.15);
  color: #1e293b;
  transform: rotate(90deg);
}

/* Modal Top Bar */
.modal-top-bar {
  margin-bottom: 18px;
}

.top-meta-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding-right: 36px; /* space for close button */
}

.lesson-tag {
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0.8px;
  color: var(--blue, #2563eb);
  text-transform: uppercase;
}

.top-status-pills {
  display: flex;
  align-items: center;
  gap: 8px;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 800;
  background: rgba(148, 163, 184, 0.12);
  color: var(--ink, #1e293b);
  border: 1px solid rgba(148, 163, 184, 0.2);
}

.streak-pill.on-fire {
  background: rgba(245, 158, 11, 0.15);
  border-color: rgba(245, 158, 11, 0.4);
  color: #d97706;
  animation: pulseFlame 1.4s infinite alternate;
}

.flame-icon {
  font-size: 14px;
}

.heart-icon {
  font-size: 13px;
}

.exercise-progress-track {
  height: 12px;
  background: #e2e8f0;
  border-radius: 999px;
  overflow: hidden;
  position: relative;
}

.exercise-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #10b981, #059669);
  border-radius: inherit;
  transition: width 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
}

.progress-glow {
  position: absolute;
  top: 0;
  right: 0;
  width: 14px;
  height: 100%;
  background: rgba(255, 255, 255, 0.45);
  filter: blur(2px);
}

.progress-subtext {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 700;
  color: #94a3b8;
  margin-top: 6px;
}

/* Prompt Card */
.prompt-box {
  margin-bottom: 16px;
}

.prompt-category-badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  color: #64748b;
  background: rgba(100, 116, 139, 0.1);
  padding: 2px 8px;
  border-radius: 6px;
  margin-bottom: 6px;
}

.prompt-heading {
  font-size: clamp(19px, 4vw, 23px);
  font-weight: 800;
  line-height: 1.25;
  margin: 0 0 6px;
  color: var(--ink, #0f172a);
}

.prompt-tip {
  font-size: 14px;
  font-weight: 600;
  color: #64748b;
  margin: 0;
}

/* Answer Options */
.enhanced-answer-list {
  display: grid;
  gap: 10px;
  margin-bottom: 16px;
}

.enhanced-option-card {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 13px 16px;
  border: 2px solid var(--line, #e2e8f0);
  border-bottom-width: 4px;
  border-radius: 16px;
  background: var(--card, #ffffff);
  color: var(--ink, #1e293b);
  text-align: left;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  transition: transform 0.08s ease, border-color 0.15s ease, background 0.15s ease;
}

.enhanced-option-card:hover:not(:disabled) {
  border-color: var(--blue, #3b82f6);
  background: rgba(59, 130, 246, 0.06);
  transform: translateY(-2px);
}

.enhanced-option-card:active:not(:disabled) {
  transform: translateY(2px);
  border-bottom-width: 2px;
}

.enhanced-option-card.correct {
  border-color: #10b981 !important;
  background: rgba(16, 185, 129, 0.12) !important;
  color: #065f46 !important;
}

.enhanced-option-card.incorrect {
  border-color: #ef4444 !important;
  background: rgba(239, 68, 68, 0.1) !important;
  color: #991b1b !important;
}

.enhanced-option-card.disabled {
  opacity: 0.6;
  cursor: default;
}

.option-letter {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background: rgba(148, 163, 184, 0.15);
  color: #475569;
  font-size: 13px;
  font-weight: 900;
  flex-shrink: 0;
  transition: background 0.15s ease, color 0.15s ease;
}

.enhanced-option-card:hover .option-letter {
  background: var(--blue, #3b82f6);
  color: #ffffff;
}

.enhanced-option-card.correct .option-letter {
  background: #10b981;
  color: #ffffff;
}

.enhanced-option-card.incorrect .option-letter {
  background: #ef4444;
  color: #ffffff;
}

.option-text {
  flex: 1;
}

.option-badge {
  font-size: 16px;
  font-weight: 900;
  display: grid;
  place-items: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
}

.option-badge.check {
  color: #059669;
  background: rgba(16, 185, 129, 0.2);
}

.option-badge.cross {
  color: #dc2626;
  background: rgba(239, 68, 68, 0.2);
}

/* Feedback Panel */
.feedback-panel {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  border-radius: 18px;
  animation: slideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.feedback-panel.correct {
  background: rgba(16, 185, 129, 0.12);
  border: 1.5px solid rgba(16, 185, 129, 0.3);
}

.feedback-panel.incorrect {
  background: rgba(239, 68, 68, 0.1);
  border: 1.5px solid rgba(239, 68, 68, 0.25);
}

.feedback-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.feedback-icon-box {
  width: 38px;
  height: 38px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  font-size: 20px;
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  flex-shrink: 0;
}

.feedback-text-content {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.feedback-title {
  font-size: 15px;
  font-weight: 900;
}

.feedback-panel.correct .feedback-title {
  color: #065f46;
}

.feedback-panel.incorrect .feedback-title {
  color: #991b1b;
}

.feedback-detail {
  font-size: 13.5px;
  font-weight: 700;
  color: #475569;
}

.streak-highlight {
  display: inline-block;
  margin-left: 6px;
  color: #d97706;
  font-weight: 900;
}

.next-action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 14px 20px;
  border: none;
  border-radius: 14px;
  font-size: 16px;
  font-weight: 900;
  cursor: pointer;
  transition: transform 0.1s ease, filter 0.12s ease;
}

.feedback-panel.correct .next-action-btn {
  background: #10b981;
  color: #ffffff;
  border-bottom: 4px solid #059669;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.feedback-panel.incorrect .next-action-btn {
  background: #ef4444;
  color: #ffffff;
  border-bottom: 4px solid #b91c1c;
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
}

.next-action-btn:hover {
  filter: brightness(1.06);
  transform: translateY(-1px);
}

.next-action-btn:active {
  transform: translateY(2px);
  border-bottom-width: 2px;
}

.action-arrow {
  font-size: 18px;
}

.key-hint {
  display: inline-block;
  padding: 2px 6px;
  font-size: 11px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.25);
  color: #ffffff;
  font-family: inherit;
  margin-left: 6px;
}

/* Locked state styles */
.locked-container {
  text-align: center;
  padding: 12px 6px;
}

.locked-icon-bubble {
  font-size: 48px;
  margin-bottom: 12px;
}

.locked-badge {
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 1px;
  color: #ef4444;
  text-transform: uppercase;
}

.locked-title {
  font-size: 24px;
  font-weight: 900;
  margin: 8px 0;
}

.locked-desc {
  color: #64748b;
  font-size: 15px;
  line-height: 1.45;
  margin-bottom: 20px;
}

/* Dark mode adjustments */
:global(.dark-mode) .enhanced-lesson-modal {
  background: #1e293b;
  border-color: #334155;
  color: #f8fafc;
}

:global(.dark-mode) .close-btn:hover {
  color: #f8fafc;
  background: rgba(255, 255, 255, 0.1);
}

:global(.dark-mode) .exercise-progress-track {
  background: #334155;
}

:global(.dark-mode) .prompt-heading {
  color: #f8fafc;
}

:global(.dark-mode) .prompt-tip {
  color: #94a3b8;
}

:global(.dark-mode) .enhanced-option-card {
  background: #0f172a;
  border-color: #334155;
  color: #f1f5f9;
}

:global(.dark-mode) .enhanced-option-card:hover:not(:disabled) {
  border-color: #60a5fa;
  background: rgba(96, 165, 250, 0.12);
}

:global(.dark-mode) .option-letter {
  background: #1e293b;
  color: #cbd5e1;
}

:global(.dark-mode) .feedback-icon-box {
  background: #0f172a;
}

:global(.dark-mode) .feedback-detail {
  color: #cbd5e1;
}

:global(.dark-mode) .feedback-panel.correct .feedback-title {
  color: #34d399;
}

:global(.dark-mode) .feedback-panel.incorrect .feedback-title {
  color: #f87171;
}

@keyframes pulseFlame {
  0% { transform: scale(1); }
  100% { transform: scale(1.05); }
}

@keyframes slideUp {
  0% { opacity: 0; transform: translateY(12px); }
  100% { opacity: 1; transform: translateY(0); }
}
</style>
