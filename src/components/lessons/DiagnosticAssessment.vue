<script setup>
defineProps({
  question: { type: Object, required: true },
  questionNumber: { type: Number, required: true },
  questionCount: { type: Number, required: true },
  progress: { type: Number, required: true },
  levelLabel: { type: String, required: true },
  currentLevel: { type: String, required: true },
  selectedAnswer: { type: String, default: null },
  answerStatus: { type: String, default: null },
  isComplete: { type: Boolean, default: false },
  correctAnswers: { type: Number, required: true },
  categoryScores: { type: Array, default: () => [] },
})

defineEmits(['answer', 'next', 'continue', 'start', 'close'])
</script>

<template>
  <Transition name="toast" appear>
    <div class="lesson-modal diagnostic-modal">
      <button type="button" class="close-button" aria-label="Cerrar diagnóstico" @click="$emit('close')">×</button>
      <template v-if="questionNumber === 0">
        <div class="diagnostic-intro-icon">🎯</div><span class="toast-label">QUICK LEVEL CHECK</span><h2>Let's discover your English level.</h2><p class="preparation-lead">This assessment will help YouLaw adapt your learning path to you.</p><div class="diagnostic-intro-meta"><span>20 questions</span><span>No pressure</span></div><button class="primary-button modal-button" type="button" @click="$emit('start')">Start <span>→</span></button>
      </template>
      <template v-else-if="!isComplete">
        <div class="diagnostic-heading"><span class="toast-label">QUICK LEVEL CHECK</span><span class="diagnostic-level">{{ levelLabel }}</span></div>
        <div class="modal-progress"><span :style="{ width: `${progress}%` }"></span></div>
        <div class="diagnostic-meta"><span>Pregunta {{ questionNumber }} de {{ questionCount }}</span><span class="skill-label">{{ question.category }}</span></div>
        <h2>{{ question.question }}</h2>
        <p class="modal-hint">No es un examen. Ajustaremos el nivel mientras avanzas.</p>
        <div class="answer-list"><button v-for="option in question.options" :key="option" type="button" class="answer-option" :class="{ selected: selectedAnswer === option, correct: selectedAnswer === option && answerStatus === 'correct', incorrect: selectedAnswer === option && answerStatus === 'incorrect' }" @click="$emit('answer', option)"><span class="answer-letter">{{ String.fromCharCode(65 + question.options.indexOf(option)) }}</span>{{ option }}<span v-if="selectedAnswer === option" class="answer-status">{{ answerStatus === 'correct' ? '✓' : '!' }}</span></button></div>
        <div v-if="answerStatus" class="feedback" :class="answerStatus"><strong>{{ answerStatus === 'correct' ? '¡Muy bien!' : 'Respuesta registrada' }}</strong><span>{{ answerStatus === 'correct' ? `Subimos el reto con cuidado. Nivel actual: ${currentLevel}` : `${question.explanation} Continuamos con la siguiente pregunta.` }}</span></div>
        <p v-if="answerStatus" class="diagnostic-advance">Siguiente pregunta...</p>
      </template>
      <template v-else>
        <div class="diagnostic-result-icon">✓</div><span class="toast-label">YOUR ENGLISH LEVEL</span><h2>{{ currentLevel }} · {{ levelLabel.split(' · ')[1] }}</h2><p class="preparation-lead">Acertaste {{ correctAnswers }} de {{ questionCount }} preguntas. Great start! Esta será tu ruta inicial.</p><div class="result-bars"><div v-for="item in categoryScores" :key="item.category"><span>{{ item.category }}</span><i><b :style="{ width: `${item.score}%` }"></b></i><strong>{{ item.score }}%</strong></div></div><button class="primary-button modal-button" type="button" @click="$emit('continue')">Continuar <span>→</span></button>
      </template>
    </div>
  </Transition>
</template>
