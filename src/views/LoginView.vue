<script setup>
import { ref } from 'vue'
import { useAuth } from '../composables/useAuth'

const { login, register, demoAccounts } = useAuth()

const mode = ref('login')
const email = ref('')
const password = ref('')
const name = ref('')
const role = ref('Estudiante')
const error = ref('')
const loading = ref(false)
const showDemo = ref(false)

function switchMode(next) {
  mode.value = next
  error.value = ''
}

function fillDemo(account) {
  email.value = account.email
  password.value = account.password
  mode.value = 'login'
  error.value = ''
  showDemo.value = false
}

async function submit() {
  error.value = ''
  loading.value = true
  try {
    const result = mode.value === 'login'
      ? login(email.value, password.value)
      : register({ name: name.value, email: email.value, password: password.value, role: role.value })
    if (!result.ok) error.value = result.error
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="auth-page" :class="{ 'dark-mode': false }">
    <div class="auth-shell">
      <aside class="auth-brand-panel" aria-hidden="false">
        <div class="brand-mark auth-brand"><span class="brand-star">✦</span><span>YouLaw<span class="brand-dot">.</span></span></div>
        <h1>Inglés jurídico,<br /><em>a tu ritmo.</em></h1>
        <p>Practica vocabulario y situaciones legales con una ruta adaptada a tu nivel CEFR.</p>
        <ul class="auth-features">
          <li>Evaluación inicial de 20 preguntas</li>
          <li>Lecciones por nivel A1–C1</li>
          <li>Progreso guardado en este dispositivo</li>
        </ul>
        <p class="auth-mock-note">Modo demostración: las cuentas y contraseñas son solo para pruebas locales.</p>
      </aside>

      <section class="auth-card">
        <div class="auth-tabs" role="tablist" aria-label="Acceso">
          <button type="button" role="tab" :aria-selected="mode === 'login'" :class="{ active: mode === 'login' }" @click="switchMode('login')">Iniciar sesión</button>
          <button type="button" role="tab" :aria-selected="mode === 'register'" :class="{ active: mode === 'register' }" @click="switchMode('register')">Crear cuenta</button>
        </div>

        <form class="auth-form" @submit.prevent="submit">
          <template v-if="mode === 'register'">
            <label class="auth-field">
              <span>Nombre</span>
              <input v-model="name" type="text" autocomplete="name" placeholder="Tu nombre" required />
            </label>
            <label class="auth-field">
              <span>Rol</span>
              <select v-model="role" aria-label="Rol">
                <option value="Estudiante">Estudiante</option>
                <option value="Profesora">Profesora</option>
                <option value="Abogado">Abogado</option>
              </select>
            </label>
          </template>

          <label class="auth-field">
            <span>Correo</span>
            <input v-model="email" type="email" autocomplete="email" placeholder="tu@correo.com" required />
          </label>
          <label class="auth-field">
            <span>Contraseña</span>
            <input v-model="password" type="password" :autocomplete="mode === 'login' ? 'current-password' : 'new-password'" placeholder="••••••••" required minlength="6" />
          </label>

          <p v-if="error" class="auth-error" role="alert">{{ error }}</p>

          <button class="primary-button auth-submit" type="submit" :disabled="loading">
            {{ loading ? 'Un momento…' : mode === 'login' ? 'Entrar' : 'Registrarme' }}
            <span v-if="!loading">→</span>
          </button>
        </form>

        <div class="auth-demo">
          <button type="button" class="text-button auth-demo-toggle" @click="showDemo = !showDemo">
            {{ showDemo ? 'Ocultar' : 'Ver' }} cuentas de prueba <span>{{ showDemo ? '↑' : '↓' }}</span>
          </button>
          <ul v-if="showDemo" class="auth-demo-list">
            <li v-for="account in demoAccounts" :key="account.email">
              <div>
                <strong>{{ account.name }}</strong>
                <small>{{ account.email }} · {{ account.role }}</small>
              </div>
              <button type="button" class="theme-toggle auth-demo-use" @click="fillDemo(account)">Usar</button>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>
