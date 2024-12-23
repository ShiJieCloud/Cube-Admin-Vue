import { defineStore } from 'pinia'
import { ref } from 'vue'

import { MenuItem } from '@/types/models/menu'

export const useMenuStore = defineStore(
  'Menu',
  () => {
    // 定义响应式的 userMenuData
    const userMenuData = ref<MenuItem>()

    return { userMenuData }
  },
  {
    persist: true, // 持久化存储
  },
)
