import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'User',
  () => {
    const token = ref<string>()

    const setToken = (_token: string): void => {
      token.value = _token
    }

    return {
      token,
      setToken,
    }
  },
  {
    persist: true,
  },
)
