<script setup>
import InteractiveGameHost from '../components/interactive/InteractiveGameHost.vue'

defineProps({
  englishLevel: { type: String, default: null },
})
</script>

<template>
  <section class="didactic-view" aria-label="Módulo didáctico interactivo">
    <div class="didactic-game-panel">
      <InteractiveGameHost :english-level="englishLevel" />
    </div>
  </section>
</template>
