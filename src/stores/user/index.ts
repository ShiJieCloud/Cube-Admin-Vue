import { defineStore } from 'pinia'
import { ref } from 'vue'

import { LoginFormMode } from '@/constants/loginFormMode'

export const useUserStore = defineStore(
  'User',
  () => {
    const loginFormMode = ref<LoginFormMode>(LoginFormMode.USERNAME)

    const captchaId = ref<string>()

    const setLoginFormMode = (mode: LoginFormMode): void => {
      loginFormMode.value = mode
    }

    const setCaptchaId = (id: string): void => {
      captchaId.value = id
    }

    return {
      captchaId,
      loginFormMode,
      setLoginFormMode,
      setCaptchaId,
    }
  },
  {
    persist: true,
  },
)
