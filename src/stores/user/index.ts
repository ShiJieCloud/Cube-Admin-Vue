import { defineStore } from 'pinia'
import { ref } from 'vue'

import { LoginFormMode } from '@/constants/loginFormMode'

export const useUserStore = defineStore(
  'User',
  () => {
    const loginFormMode = ref<LoginFormMode>(LoginFormMode.USERNAME)

    const setLoginFormMode = (mode: LoginFormMode): void => {
      loginFormMode.value = mode
    }

    return {
      loginFormMode,
      setLoginFormMode,
    }
  },
  {
    persist: true,
  },
)
