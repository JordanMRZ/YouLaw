import { computed, ref } from 'vue'
import * as authService from '../services/authService'

const session = ref(authService.getSession())

export function useAuth() {
  const isAuthenticated = computed(() => Boolean(session.value?.userId))
  const user = computed(() => session.value)

  function login(email, password) {
    const result = authService.login(email, password)
    if (result.ok) session.value = result.session
    return result
  }

  function register(payload) {
    const result = authService.register(payload)
    if (result.ok) session.value = result.session
    return result
  }

  function logout() {
    authService.logout()
    session.value = null
  }

  function refreshSession() {
    session.value = authService.getSession()
  }

  return {
    isAuthenticated,
    user,
    login,
    register,
    logout,
    refreshSession,
    demoAccounts: authService.listDemoAccounts(),
  }
}
