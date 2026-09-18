<script setup>
import { ref } from 'vue'

const props = defineProps({
  onStartDiagnostic: { type: Function, required: true },
})
const emit = defineEmits(['reset'])

const confirmReset = ref(false)

function startDiagnostic() {
  props.onStartDiagnostic()
}
</script>

<template>
  <section class="initial-assessment-view">
    <div class="initial-assessment-art" aria-hidden="true"><span>🎯</span><i></i><b></b></div>
    <span class="level-kicker">WELCOME TO YOULAW</span>
    <h2>Descubre tu nivel<br /><em>de inglés.</em></h2>
    <p>Antes de comenzar tu ruta  de aprendizaje, queremos conocer desde dónde empiezas. Esta evaluación breve ayudará a adaptar cada actividad a ti.</p>
    <div class="initial-assessment-points"><span>20 preguntas</span><span>Sin presión</span><span>100% local</span></div>
    <button class="primary-button initial-assessment-button" type="button" @click.prevent="startDiagnostic">Conocer mi nivel <span>→</span></button>
    <div class="initial-reset">
      <template v-if="!confirmReset"><button type="button" class="secondary-button" @click="confirmReset = true">⚙ Reiniciar progreso</button></template>
      <template v-else><p>Se eliminarán el nivel, evaluación, XP y progreso local.</p><button type="button" class="secondary-button" @click="confirmReset = false">Cancelar</button><button type="button" class="danger-button inline-danger" @click="$emit('reset')">Reiniciar progreso</button></template>
    </div>
  </section>
</template>
