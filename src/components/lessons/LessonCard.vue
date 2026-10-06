<script setup>
defineProps({
  lesson: { type: Object, required: true },
  library: { type: Boolean, default: false },
})

defineEmits(['select'])
</script>

<template>
  <button class="lesson-card" :class="[lesson.state, lesson.color]" type="button" @click="$emit('select', lesson)">
    <span class="lesson-number">{{ lesson.number }}</span>
    <span v-if="lesson.state === 'done'" class="status-mark">✓</span>
    <span v-else-if="lesson.state === 'locked'" class="status-mark lock" aria-hidden="true">
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
        <rect x="5" y="11" width="14" height="9" rx="2" />
        <path d="M8 11V8a4 4 0 0 1 8 0v3" />
      </svg>
    </span>
    <span class="lesson-title">{{ lesson.title }}</span>
    <span class="lesson-subtitle">{{ lesson.subtitle }}</span>
    <span class="lesson-action">{{ library ? (lesson.state === 'done' ? 'Repetir lección' : lesson.state === 'current' ? 'Comenzar ahora' : 'Próximamente') : (lesson.state === 'done' ? 'Completada' : lesson.state === 'current' ? 'En curso' : 'Próximamente') }}</span>
  </button>
</template>
