<script setup>
import { ref } from 'vue'
import AppIcon from '../icons/AppIcon.vue'
import { Moon02Icon, Settings01Icon, StarIcon, Sun03Icon } from '../../icons/navigationIcons.js'

defineProps({
  darkMode: { type: Boolean, default: false },
  userEmail: { type: String, default: '' },
})

defineEmits(['close', 'reset', 'toggle-dark-mode', 'set-testing-level', 'logout'])

const confirmingReset = ref(false)
const selectedTestingLevel = ref('A1')
</script>

<template>
  <Transition name="toast" appear>
    <div class="lesson-modal settings-modal">
      <button type="button" class="close-button" aria-label="Cerrar configuración" @click="$emit('close')">×</button>
      <span class="toast-label">SETTINGS</span>
      <h2>Configuración</h2>
      <p class="preparation-lead">Herramientas locales para revisar el estado de tu experiencia durante el desarrollo.</p>
      <p v-if="userEmail" class="settings-account">Sesión: <strong>{{ userEmail }}</strong></p>
      <template v-if="!confirmingReset">
        <div class="settings-row theme-setting">
          <span class="settings-icon"><AppIcon :icon="darkMode ? Sun03Icon : Moon02Icon" :size="18" /></span>
          <div><strong>Modo oscuro</strong><p>{{ darkMode ? 'Usar la apariencia clara.' : 'Usar una apariencia más cómoda para la noche.' }}</p></div>
          <button class="theme-toggle" type="button" :aria-pressed="darkMode" @click="$emit('toggle-dark-mode')"><span>{{ darkMode ? 'Activado' : 'Desactivado' }}</span></button>
        </div>
        <div class="settings-row level-testing-setting">
          <span class="settings-icon"><AppIcon :icon="StarIcon" :size="18" /></span>
          <div><strong>Probar un nivel</strong><p>Activa un nivel para revisar sus lecciones y preguntas.</p></div>
          <select v-model="selectedTestingLevel" aria-label="Nivel para probar"><option v-for="level in ['A1', 'A2', 'B1', 'B2', 'C1']" :key="level" :value="level">{{ level }}</option></select>
          <button class="theme-toggle" type="button" @click="$emit('set-testing-level', selectedTestingLevel)">Aplicar</button>
        </div>
        <div class="settings-row">
          <span class="settings-icon"><AppIcon :icon="Settings01Icon" :size="18" /></span>
          <div><strong>Development / Reset</strong><p>Borra el progreso local de YouLaw y vuelve al estado inicial.</p></div>
        </div>
        <button class="secondary-button settings-logout" type="button" @click="$emit('logout')">Cerrar sesión</button>
        <button class="danger-button" type="button" @click="confirmingReset = true">Reset my progress</button>
      </template>
      <template v-else>
        <div class="reset-warning"><strong>⚠ RESET PROGRESS</strong><p>Se borrará el nivel, diagnóstico, XP, racha, lecciones y logros locales. Esta acción no se puede deshacer.</p></div>
        <div class="settings-actions"><button class="secondary-button" type="button" @click="confirmingReset = false">Cancelar</button><button class="danger-button" type="button" @click="$emit('reset')">Reset everything</button></div>
      </template>
    </div>
  </Transition>
</template>
