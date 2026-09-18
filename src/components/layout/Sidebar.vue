<script setup>
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
    <div class="brand-mark" aria-label="YouLaw"><span class="brand-star">✦</span><span>YouLaw<span class="brand-dot">.</span></span></div>
    <nav class="main-nav" aria-label="Navegación principal">
      <button v-for="item in navigation" :key="item.label" class="nav-item" :class="{ active: activeSection === item.label }" type="button" @click="$emit('navigate', item.label)">
        <span class="nav-icon">{{ item.icon }}</span>{{ item.label }}
      </button>
    </nav>
    <div class="sidebar-bottom">
      <div class="help-card"><span class="help-spark">✦</span><strong>Tu progreso importa</strong><p>Una lección hoy mantiene viva tu racha.</p></div>
      <button class="profile-button" type="button" @click="$emit('settings')"><span class="avatar">{{ user.initials }}</span><span class="profile-copy"><strong>{{ user.name }}</strong><small>{{ user.role }}</small></span><span class="more-icon">⚙</span></button>
    </div>
  </aside>
</template>
