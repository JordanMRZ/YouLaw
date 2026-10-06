<script setup>
import { computed } from 'vue'
import { getLessonIntro } from '../../data/lessonIntros'
import { getSubjectLabel } from '../../data/curriculumMap.js'

const props = defineProps({ lesson: { type: Object, required: true } })
const emit = defineEmits(['begin-lesson', 'close'])

const intro = computed(() => getLessonIntro(props.lesson))

const subjectLabels = computed(() =>
  (props.lesson.subjects ?? []).map((code) => getSubjectLabel(code)),
)

const semesterHintLabel = computed(() => {
  const hints = props.lesson.semesterHints ?? []
  if (!hints.length) return null
  const sorted = [...hints].sort((a, b) => a - b)
  if (sorted.length === 1) return `Orientativo: semestre ${sorted[0]} del plan virtual`
  return `Orientativo: semestres ${sorted[0]}–${sorted[sorted.length - 1]} del plan virtual`
})

function beginLesson() {
  emit('begin-lesson')
}
</script>

<template>
  <Transition name="toast" appear>
    <div class="lesson-modal preparation-modal">
      <button type="button" class="close-button" aria-label="Cerrar preparación" @click="$emit('close')">×</button>
      <div class="preparation-art">✦</div>
      <span class="toast-label">PREPARACIÓN DE LA LECCIÓN · {{ lesson.level }} · {{ lesson.number }}</span>
      <h2>{{ lesson.title }}</h2>
      <p class="preparation-lead">{{ intro.lead }}</p>
      <div class="context-list">
        <div><span>01</span><p><strong>Objetivo de hoy</strong><br />{{ intro.objective }}</p></div>
        <div><span>02</span><p><strong>Vas a practicar</strong><br />{{ intro.practice }}</p></div>
        <div><span>03</span><p><strong>Tu reto</strong><br />{{ intro.challenge }}</p></div>
      </div>
      <section v-if="subjectLabels.length" class="lesson-curriculum-panel" aria-label="Materias del plan">
        <p class="eyebrow">MATERIAS DEL PLAN</p>
        <ul class="lesson-curriculum-tags">
          <li v-for="label in subjectLabels" :key="label">{{ label }}</li>
        </ul>
        <p v-if="semesterHintLabel" class="lesson-semester-hint">{{ semesterHintLabel }}</p>
        <p v-if="lesson.colombiaBridge" class="lesson-colombia-bridge">
          <strong>Puente Colombia ↔ inglés:</strong> {{ lesson.colombiaBridge }}
        </p>
      </section>
      <section v-if="intro.vocabulary.length" class="lesson-vocab-panel" aria-label="Vocabulario jurídico de la lección">
        <p class="eyebrow">GLOSARIO · INGLÉS JURÍDICO</p>
        <ul class="lesson-vocab-list">
          <li v-for="item in intro.vocabulary" :key="item.term">
            <strong>{{ item.term }}</strong>
            <p v-if="item.definition">{{ item.definition }}</p>
            <p v-else class="lesson-vocab-missing">Definición no encontrada en el glosario local; la verás en contexto en los ejercicios.</p>
            <small v-if="item.source">{{ item.source }}</small>
          </li>
        </ul>
      </section>
      <div class="preparation-footer">
        <span>{{ intro.exerciseCount }} ejercicios · nivel {{ intro.level }}</span>
        <button class="primary-button" type="button" @click.prevent="beginLesson">Comenzar lección <span>→</span></button>
      </div>
    </div>
  </Transition>
</template>
