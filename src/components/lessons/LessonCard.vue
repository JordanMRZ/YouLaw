<script setup>
import { computed } from 'vue'
import { getSubjectShortLabel } from '../../data/curriculumMap.js'

const props = defineProps({
  lesson: { type: Object, required: true },
  library: { type: Boolean, default: false },
  showSubjects: { type: Boolean, default: false },
})

defineEmits(['select'])

const subjectLabels = computed(() =>
  (props.lesson.subjects ?? []).slice(0, 3).map((code) => getSubjectShortLabel(code)),
)
</script>

<template>
  <button class="lesson-card" :class="[lesson.state, lesson.color]" type="button" @click="$emit('select', lesson)">
    <span class="lesson-number">{{ lesson.number }}</span>
    <span v-if="lesson.state === 'done'" class="status-mark">✓</span>
    <span v-else-if="lesson.state === 'locked'" class="status-mark lock">•</span>
    <span class="lesson-title">{{ lesson.title }}</span>
    <span class="lesson-subtitle">{{ lesson.subtitle }}</span>
    <span v-if="showSubjects && subjectLabels.length" class="lesson-subject-tags">
      <span v-for="label in subjectLabels" :key="label" class="lesson-subject-tag">{{ label }}</span>
    </span>
    <span class="lesson-action">{{ library ? (lesson.state === 'done' ? 'Repetir lección' : lesson.state === 'current' ? 'Comenzar ahora' : 'Próximamente') : (lesson.state === 'done' ? 'Completada' : lesson.state === 'current' ? 'En curso' : 'Próximamente') }}</span>
  </button>
</template>
