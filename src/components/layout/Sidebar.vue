<script setup>
import AppIcon from '../icons/AppIcon.vue'
import { navigationIcons, Settings01Icon, SparklesIcon } from '../../icons/navigationIcons.js'

defineProps({
  activeSection: { type: String, required: true },
  navigation: { type: Array, required: true },
  user: {
    type: Object,
    default: () => ({ name: 'Usuario', role: 'Estudiante', initials: 'YL' }),
  },
})

defineEmits(['navigate', 'settings', 'logout'])
</script>

<template>
  <aside class="sidebar">
    <div class="brand-mark" aria-label="YouLaw">
      <span class="brand-star"><AppIcon :icon="SparklesIcon" :size="22" /></span>
      <span>YouLaw<span class="brand-dot">.</span></span>
    </div>
    <nav class="main-nav" aria-label="Navegación principal">
      <button
        v-for="item in navigation"
        :key="item.label"
        class="nav-item"
        :class="{ active: activeSection === item.label }"
        type="button"
        @click="$emit('navigate', item.label)"
      >
        <span class="nav-icon">
          <AppIcon :icon="navigationIcons[item.label]" :size="18" />
        </span>
        <span class="nav-label">{{ item.label }}</span>
      </button>
    </nav>
    <div class="sidebar-bottom">
      <div class="help-card">
        <span class="help-spark"><AppIcon :icon="SparklesIcon" :size="16" /></span>
        <strong>Tu progreso importa</strong>
        <p>Una lección hoy mantiene viva tu racha.</p>
      </div>
      <button class="profile-button" type="button" @click="$emit('settings')">
        <span class="avatar">{{ user.initials }}</span>
        <span class="profile-copy"><strong>{{ user.name }}</strong><small>{{ user.role }}</small></span>
        <span class="more-icon"><AppIcon :icon="Settings01Icon" :size="18" /></span>
      </button>
    </div>
  </aside>
</template>
