<script setup>
defineProps({
  summary: { type: Object, required: true },
})

defineEmits(['close', 'advance-level'])
</script>

<template>
  <Transition name="toast" appear>
    <div class="lesson-modal completion-modal">
      <div class="completion-confetti" aria-hidden="true">✦</div>
      <span class="toast-label">LECCIÓN COMPLETADA</span>
      <h2>¡Gran trabajo!</h2>
      <p class="preparation-lead">Terminaste {{ summary.title }} y sumaste una nueva victoria a tu ruta.</p>
      <div class="completion-reward"><strong>+{{ summary.xp }} XP</strong><span>Recompensa ganada</span></div>
      <button v-if="summary.nextLevel" class="primary-button modal-button" type="button" @click="$emit('advance-level', summary.nextLevel)">Desbloquear {{ summary.nextLevel }} <span>→</span></button>
      <button class="primary-button modal-button" type="button" @click="$emit('close')">{{ summary.nextLevel ? 'Seguir en A1' : 'Volver al inicio' }} <span>→</span></button>
    </div>
  </Transition>
</template>
