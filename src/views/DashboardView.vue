<script setup>
import { weeklyActivity } from '../data/mockData'
import LessonCard from '../components/lessons/LessonCard.vue'
import AppIcon from '../components/icons/AppIcon.vue'
import { Award01Icon, FireIcon, FavouriteIcon, SparklesIcon } from '../icons/navigationIcons.js'

defineProps({
  lessons: { type: Array, required: true },
  totalXp: { type: Number, required: true },
  diagnosticCompleted: { type: Boolean, default: false },
  englishLevel: { type: String, default: null },
  diagnosticScore: { type: Number, default: 0 },
  lives: { type: Number, default: 5 },
  maxLives: { type: Number, default: 5 },
})

defineEmits(['select-lesson', 'show-lessons', 'start-diagnostic', 'start-learning', 'reassess'])
</script>

<template>
  <section class="level-hero" :class="{ ready: diagnosticCompleted }">
    <div class="level-hero-copy">
      <span class="level-kicker">{{ diagnosticCompleted ? 'YOUR ENGLISH LEVEL' : 'WELCOME TO YOULAW' }}</span>
      <template v-if="!diagnosticCompleted">
        <h2>Conoce tu nivel<br /><em>y aprende a tu ritmo.</em></h2>
        <p>Antes de comenzar tu ruta, hagamos una mini evaluación para personalizar la experiencia de hoy.</p>
        <div class="level-meta"><span>🎯 Quick assessment</span><span>20 preguntas</span><span>Sin presión</span></div>
        <button class="primary-button level-button" type="button" @click="$emit('start-diagnostic')">Conocer mi nivel <span>→</span></button>
      </template>
      <template v-else>
        <div class="level-value"><strong>{{ englishLevel }}</strong><span>{{ englishLevel === 'A1' ? 'Beginner' : englishLevel === 'A2' ? 'Elementary' : englishLevel === 'B1' ? 'Intermediate' : englishLevel === 'B2' ? 'Upper Intermediate' : 'Advanced' }}</span></div>
        <h2>Tu ruta está lista.</h2>
        <p>Tu resultado fue de {{ diagnosticScore }}%. YouLaw adaptará tus prácticas a este punto de partida.</p>
        <div class="level-meta"><span>✓ Nivel guardado</span><span>🎯 Dificultad {{ englishLevel }}</span></div>
        <div class="level-actions"><button class="primary-button level-button" type="button" @click="$emit('start-learning')">Empezar lección <span>↓</span></button><button class="secondary-button" type="button" @click="$emit('reassess')">Volver a evaluar mi nivel</button></div>
      </template>
    </div>
    <div class="level-hero-art" aria-hidden="true"><div class="target-ring ring-one"></div><div class="target-ring ring-two"></div><div class="target-core">{{ diagnosticCompleted ? englishLevel : '✦' }}</div><span class="art-spark spark-one">✦</span><span class="art-spark spark-two">✦</span></div>
  </section>

  <section v-if="diagnosticCompleted" class="recommendation-panel"><div><p class="eyebrow">TODAY'S RECOMMENDATION</p><h2>Ruta {{ englishLevel }}</h2><p>Comienza desde la primera lección disponible en tu camino.</p></div><div class="recommendation-meta"><span>10 lecciones</span><strong>{{ englishLevel }}</strong></div></section>
  <section v-else class="first-step-note"><span>01</span><div><strong>Tu primer paso</strong><p>Conoce tu nivel para que cada actividad tenga el reto adecuado para ti.</p></div></section>

  <section class="stats-strip"><article class="stat-item"><span class="stat-icon coral-icon"><AppIcon :icon="FireIcon" :size="18" /></span><div><strong>5 días</strong><small>Racha actual</small></div></article><article class="stat-item"><span class="stat-icon blue-icon"><AppIcon :icon="SparklesIcon" :size="18" /></span><div><strong>{{ totalXp }} XP</strong><small>Experiencia total</small></div></article><article class="stat-item lives-stat"><span class="stat-icon coral-icon"><AppIcon :icon="FavouriteIcon" :size="18" /></span><div><strong>{{ lives }}/{{ maxLives }}</strong><small>Vidas</small></div></article><article class="stat-item"><span class="stat-icon yellow-icon"><AppIcon :icon="Award01Icon" :size="18" /></span><div><strong>3 logros</strong><small>Desbloqueados</small></div></article></section>

  <section id="learning-path" class="section-block secondary-section"><div class="section-heading"><div><p class="eyebrow">RUTA DE APRENDIZAJE</p><h2>Tu camino</h2></div><button class="text-button" type="button" @click="$emit('show-lessons')">Ver todo <span>→</span></button></div><div class="lesson-path"><LessonCard v-for="lesson in lessons" :key="lesson.id" :lesson="lesson" @select="$emit('select-lesson', $event)" /></div></section>
  <section class="lower-grid"><article class="weekly-card"><div class="section-heading"><div><p class="eyebrow">ESTA SEMANA</p><h2>Tu actividad</h2></div><span class="chart-total">{{ totalXp }} <small>XP</small></span></div><div class="chart"><span v-for="height in weeklyActivity" :key="height" class="bar" :style="{ height: `${height}%` }"></span></div><div class="chart-labels"><span>Lun</span><span>Mar</span><span>Mié</span><span>Jue</span><span>Vie</span><span>Sáb</span><span>Dom</span></div></article><article class="achievement-card"><div class="badge-icon">★</div><div><p class="eyebrow">PRÓXIMO LOGRO</p><h2>Constancia</h2><p>Completa 2 lecciones más para desbloquearlo.</p><div class="achievement-track"><span></span></div><small>3 de 5 lecciones</small></div></article></section>
</template>
