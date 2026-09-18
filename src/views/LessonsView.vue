<script setup>
import LessonCard from '../components/lessons/LessonCard.vue'

defineProps({ lessons: { type: Array, required: true } })
defineEmits(['select-lesson'])
</script>

<template>
  <section class="library-view"><p class="eyebrow">BIBLIOTECA DE APRENDIZAJE</p><h2>Tus lecciones</h2><p class="view-intro">Avanza a tu ritmo. Cada práctica suma confianza y XP.</p><div class="lesson-path library-grid"><LessonCard v-for="lesson in lessons" :key="lesson.id" :lesson="lesson" library @select="$emit('select-lesson', $event)" /></div></section>
</template>
