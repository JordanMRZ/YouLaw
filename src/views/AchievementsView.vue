<script setup>
import { computed } from 'vue'

const props = defineProps({
  streak: { type: Number, default: 0 },
  completedLessons: { type: Number, default: 0 },
})

const streakGoal = 7
const streakUnlocked = computed(() => props.streak >= streakGoal)
const streakWidth = computed(() => `${Math.min(100, Math.round((props.streak / streakGoal) * 100))}%`)
const firstLessonUnlocked = computed(() => props.completedLessons > 0)
</script>

<template>
  <section class="library-view">
    <p class="eyebrow">COLECCIÓN DE LOGROS</p>
    <h2>Pequeñas victorias</h2>
    <p class="view-intro">Cada hábito construye una profesora más segura en inglés.</p>
    <div class="achievement-list">
      <article class="achievement-row" :class="{ unlocked: firstLessonUnlocked }">
        <div class="badge-icon">★</div>
        <div>
          <h3>Primer paso</h3>
          <p>Completaste tu primera lección.</p>
        </div>
        <strong>{{ firstLessonUnlocked ? 'Desbloqueado' : 'Bloqueado' }}</strong>
      </article>
      <article class="achievement-row" :class="{ unlocked: streakUnlocked }">
        <div class="badge-icon">♨</div>
        <div>
          <h3>Racha encendida</h3>
          <p>Mantén una racha de 7 días.</p>
          <div v-if="!streakUnlocked" class="achievement-track"><span :style="{ width: streakWidth }"></span></div>
        </div>
        <strong>{{ streakUnlocked ? 'Desbloqueado' : `${streak} / 7 días` }}</strong>
      </article>
      <article class="achievement-row">
        <div class="badge-icon">◆</div>
        <div>
          <h3>Unidad dominada</h3>
          <p>Completa todos los ejercicios de una unidad.</p>
          <div class="achievement-track"><span style="width: 25%"></span></div>
        </div>
        <strong>25%</strong>
      </article>
    </div>
  </section>
</template>
