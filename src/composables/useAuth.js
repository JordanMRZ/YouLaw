import { computed, ref } from 'vue'
import * as authService from '../services/authService'

const session = ref(null)
const authReady = ref(false)

authService.subscribeAuth((nextSession) => {
  session.value = nextSession
  authReady.value = true
})

export function useAuth() {
  const isAuthenticated = computed(() => Boolean(session.value?.userId))
  const user = computed(() => session.value)

  async function login(cedula, password) {
    const result = await authService.loginWithCedula(cedula, password)
    if (result.ok) session.value = result.session
    return result
  }

  async function logout() {
    await authService.logout()
    session.value = null
  }

  return {
    authReady,
    isAuthenticated,
    user,
    login,
    logout,
  }
}
