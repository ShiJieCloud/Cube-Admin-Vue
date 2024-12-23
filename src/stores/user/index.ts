import { defineStore } from 'pinia'
import { ref } from 'vue'

import { LoginFormMode } from '@/constants/loginFormMode'
import { UserInfo } from '@/types/models/user'

export const useUserStore = defineStore(
  'User',
  () => {
    const loginFormMode = ref<LoginFormMode>(LoginFormMode.USERNAME)
    const userInfo = ref<UserInfo>()

    const userToken = ref<string>()

    const setLoginFormMode = (mode: LoginFormMode): void => {
      loginFormMode.value = mode
    }

    const setUserToken = (id: string): void => {
      userToken.value = id
    }

    const setUserInfo = (info: UserInfo): void => {
      userInfo.value = info
    }

    return {
      userInfo,
      userToken,
      loginFormMode,
      setLoginFormMode,
      setUserToken,
      setUserInfo,
    }
  },
  {
    persist: true,
  },
)
