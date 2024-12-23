import { defineStore } from 'pinia'
import { ref } from 'vue'

import { LoginFormMode } from '@/constants/loginFormMode'

export const useUserStore = defineStore(
  'User',
  () => {
    const loginFormMode = ref<LoginFormMode>(LoginFormMode.USERNAME)

    const userToken = ref<string>()

    const setLoginFormMode = (mode: LoginFormMode): void => {
      loginFormMode.value = mode
    }

    const setUserToken = (id: string): void => {
      userToken.value = id
    }

    return {
      userToken,
      loginFormMode,
      setLoginFormMode,
      setUserToken,
    }
  },
  {
    persist: true,
  },
)
