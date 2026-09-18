<script setup>
const props = defineProps({
  lesson: { type: Object, required: true },
  exercise: { type: Object, required: true },
  exerciseIndex: { type: Number, required: true },
  exerciseCount: { type: Number, required: true },
  selectedAnswer: { type: String, default: null },
  answerStatus: { type: String, default: null },
  isLocked: { type: Boolean, default: false },
  lockRemainingSeconds: { type: Number, default: 0 },
})

defineEmits(['answer', 'next', 'close'])

function formatLockClock(value) {
  const minutes = Math.floor(value / 60)
  const seconds = value % 60
  return `${minutes}:${String(seconds).padStart(2, '0')}`
}
</script>

<template>
  <Transition name="toast">
    <div class="lesson-modal">
      <button type="button" class="close-button" aria-label="Cerrar" @click="$emit('close')">×</button>
      <template v-if="isLocked">
        <div class="diagnostic-result-icon">⏱</div>
        <span class="toast-label">PRUEBA BLOQUEADA</span>
        <h2>Se agotaron tus 3 vidas</h2>
        <p class="preparation-lead">Tendrás que esperar {{ formatLockClock(lockRemainingSeconds) }} antes de continuar con la siguiente prueba.</p>
        <button class="primary-button modal-button" type="button" @click="$emit('close')">Volver <span>→</span></button>
      </template>
      <template v-else>
        <div class="modal-progress"><span :style="{ width: `${((exerciseIndex + 1) / exerciseCount) * 100}%` }"></span></div>
        <span class="toast-label">LECCIÓN {{ lesson.number }} · EJERCICIO {{ exerciseIndex + 1 }} DE {{ exerciseCount }}</span>
        <h2>{{ exercise.prompt }}</h2>
        <p class="modal-hint">Elige la opción correcta para completar la frase.</p>
        <div class="answer-list">
          <button v-for="option in exercise.options" :key="option" type="button" class="answer-option" :class="{ selected: selectedAnswer === option, correct: selectedAnswer === option && answerStatus === 'correct', incorrect: selectedAnswer === option && answerStatus === 'incorrect' }" @click="$emit('answer', option)">
            <span class="answer-letter">{{ String.fromCharCode(65 + exercise.options.indexOf(option)) }}</span>{{ option }}<span v-if="selectedAnswer === option" class="answer-status">{{ answerStatus === 'correct' ? '✓' : '!' }}</span>
          </button>
        </div>
        <div v-if="answerStatus" class="feedback" :class="answerStatus"><strong>{{ answerStatus === 'correct' ? '¡Excelente!' : 'Casi lo tienes' }}</strong><span>{{ answerStatus === 'correct' ? '+10 XP · Respuesta correcta' : 'Revisa el tiempo verbal e inténtalo de nuevo.' }}</span></div>
        <button v-if="answerStatus === 'correct'" class="primary-button modal-button" type="button" @click="$emit('next')">{{ exerciseIndex === exerciseCount - 1 ? 'Completar lección' : 'Siguiente ejercicio' }} <span>→</span></button>
      </template>
    </div>
  </Transition>
</template>
