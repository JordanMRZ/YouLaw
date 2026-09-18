<script setup>
defineProps({ lesson: { type: Object, required: true } })
const emit = defineEmits(['begin-lesson', 'close'])

function beginLesson() {
  emit('begin-lesson')
}
</script>

<template>
  <Transition name="toast" appear>
    <div class="lesson-modal preparation-modal">
      <button type="button" class="close-button" aria-label="Cerrar preparación" @click="$emit('close')">×</button>
      <div class="preparation-art">✦</div>
      <span class="toast-label">PREPARACIÓN DE LA LECCIÓN · {{ lesson.number }}</span>
      <h2>Legal professions</h2>
      <p class="preparation-lead">Hoy vas a practicar situaciones que aparecen en tu día como profesora.</p>
      <div class="context-list">
        <div><span>01</span><p><strong>Objetivo de hoy</strong><br />Describir profesiones jurídicas y situaciones académicas en inglés.</p></div>
        <div><span>02</span><p><strong>Vas a practicar</strong><br />Vocabulario legal, expresiones útiles y comunicación profesional.</p></div>
        <div><span>03</span><p><strong>Tu reto</strong><br />Actividades adaptadas para que avances con confianza.</p></div>
      </div>
      <div class="preparation-footer"><span>5–7 min · nivel adaptado</span><button class="primary-button" type="button" @click.prevent="beginLesson">Comenzar lección <span>→</span></button></div>
    </div>
  </Transition>
</template>
