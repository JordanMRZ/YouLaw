<script setup>
import { ref } from 'vue'
import { useAuth } from '../composables/useAuth'

const { login } = useAuth()

const cedula = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)
const showPassword = ref(false)

async function submit() {
  error.value = ''
  loading.value = true
  try {
    const result = await login(cedula.value, password.value)
    if (!result.ok) error.value = result.error
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="auth-page">
    <div class="auth-shell">
      <aside class="auth-brand-panel" aria-hidden="false">
        <div class="brand-mark auth-brand"><span class="brand-star">✦</span><span>YouLaw<span class="brand-dot">.</span></span></div>
        <h1>Inglés jurídico,<br /><em>a tu ritmo.</em></h1>
        <p>Accede con la misma cédula y contraseña que usas en ATAV.</p>
        <ul class="auth-features">
          <li>Misma cuenta de docente ATAV</li>
          <li>Evaluación y ruta por nivel CEFR</li>
          <li>Progreso en este dispositivo</li>
        </ul>
        <p class="auth-mock-note">Si no tienes contraseña, regístrate primero en ATAV (primer ingreso).</p>
      </aside>

      <section class="auth-card">
        <div class="auth-form-header">
          <span class="level-kicker">ACCESO DOCENTES</span>
          <h2>Iniciar sesión</h2>
          <p>Ingresa tu cédula y contraseña institucional.</p>
        </div>

        <form class="auth-form" @submit.prevent="submit">
          <label class="auth-field">
            <span>Cédula</span>
            <input
              v-model="cedula"
              type="text"
              inputmode="numeric"
              autocomplete="username"
              placeholder="Número de cédula"
              required
            />
          </label>
          <label class="auth-field">
            <span>Contraseña</span>
            <div class="auth-password-row">
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                autocomplete="current-password"
                placeholder="••••••••"
                required
              />
              <button type="button" class="theme-toggle auth-password-toggle" @click="showPassword = !showPassword">
                {{ showPassword ? 'Ocultar' : 'Ver' }}
              </button>
            </div>
          </label>

          <p v-if="error" class="auth-error" role="alert">{{ error }}</p>

          <button class="primary-button auth-submit" type="submit" :disabled="loading">
            {{ loading ? 'Ingresando…' : 'Entrar' }}
            <span v-if="!loading">→</span>
          </button>
        </form>
      </section>
    </div>
  </div>
</template>
