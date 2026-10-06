<script setup>
import { computed, ref } from 'vue'
import LessonCard from '../components/lessons/LessonCard.vue'
import {
  filterLessonsBySubject,
  getSubjectShortLabel,
  subjectsUsedInLessons,
} from '../data/curriculumMap.js'

const props = defineProps({ lessons: { type: Array, required: true } })
defineEmits(['select-lesson'])

const activeSubject = ref('ALL')

const subjectFilters = computed(() => {
  const codes = subjectsUsedInLessons(props.lessons)
  return [
    { code: 'ALL', label: 'Todas las materias' },
    ...codes.map((code) => ({ code, label: getSubjectShortLabel(code) })),
  ]
})

const filteredLessons = computed(() => filterLessonsBySubject(props.lessons, activeSubject.value))

const resultCount = computed(() => filteredLessons.value.length)
</script>

<template>
  <section class="library-view">
    <p class="eyebrow">BIBLIOTECA DE APRENDIZAJE</p>
    <h2>Tus lecciones</h2>
    <p class="view-intro">
      Filtra por materia del plan de derecho virtual. Cada lección incluye preparación, glosario jurídico en inglés y puente con el derecho colombiano cuando aplica.
    </p>

    <div class="lesson-filter-bar" role="toolbar" aria-label="Filtrar lecciones por materia">
      <button
        v-for="item in subjectFilters"
        :key="item.code"
        type="button"
        class="lesson-filter-chip"
        :class="{ active: activeSubject === item.code }"
        @click="activeSubject = item.code"
      >
        {{ item.label }}
      </button>
    </div>
    <p class="lesson-filter-meta">
      {{ resultCount }} lección{{ resultCount === 1 ? '' : 'es' }}
      <span v-if="activeSubject !== 'ALL'">· {{ subjectFilters.find((f) => f.code === activeSubject)?.label }}</span>
    </p>

    <div v-if="filteredLessons.length" class="lesson-path library-grid">
      <LessonCard
        v-for="lesson in filteredLessons"
        :key="lesson.id"
        :lesson="lesson"
        library
        show-subjects
        @select="$emit('select-lesson', $event)"
      />
    </div>
    <p v-else class="lesson-filter-empty">No hay lecciones etiquetadas con esta materia en tu nivel actual.</p>
  </section>
</template>
