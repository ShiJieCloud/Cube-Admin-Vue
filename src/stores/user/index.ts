import { defineStore } from 'pinia'
import { ref } from 'vue'

import { getUserMenusApi } from '@/api/menu'
import { getUserInfoApi, getUserLogoutApi } from '@/api/user'
import { RouterConfig } from '@/config/routerConfig'
import { LoginFormMode } from '@/constants/loginFormMode'
import router, { resetRouter } from '@/router'
import { loadDynamicRouter } from '@/router/helper/dynamicRouterHelper'
import { IMenuTree } from '@/types/models/menu'
import { UserInfo } from '@/types/models/user'
import { handleError } from '@/utils/handleError'

export const useUserStore = defineStore(
  'User',
  () => {
    const loginFormMode = ref<LoginFormMode>(LoginFormMode.USERNAME)

    const token = ref<string>()
    const userInfo = ref<UserInfo>()
    const menus = ref<IMenuTree[]>([])

    const setLoginFormMode = (mode: LoginFormMode): void => {
      loginFormMode.value = mode
    }

    const setToken = (_token: string): void => {
      token.value = _token
    }

    const setUserInfo = (info: UserInfo): void => {
      userInfo.value = info
    }

    const getUserMenus = async () => {
      try {
        const menuData = await getUserMenusApi()
        menus.value = menuData
        loadDynamicRouter(menuData)
      } catch (error) {
        console.error('获取用户菜单权限失败:', error)
      }
    }

    const getUserInfo = async () => {
      try {
        userInfo.value = await getUserInfoApi()
      } catch (error) {
        console.error('获取用户信息失败:', error)
      }
    }

    /**
     * <h4>获取用户数据</h4>
     *
     * 此函数会在用户成功登录后调用，执行以下操作：
     * - 获取当前用户的菜单数据并注册动态路由
     * - 获取当前用户的详细信息
     *
     * @async
     */
    const loadUserData = async () => {
      await getUserMenus()
      await getUserInfo()
    }

    /**
     * <h4>清理用户数据</h4>
     * - 清除认证信息
     * - 清除用户信息
     * - 清除菜单信息
     * - 重置路由
     * @async
     */
    const clearUserData = async (): Promise<void> => {
      token.value = ''
      userInfo.value = undefined
      menus.value = []

      resetRouter()
    }

    const userLogout = async () => {
      try {
        await getUserLogoutApi()
        await clearUserData()
        await router.push({ name: RouterConfig.loginName })
      } catch (error) {
        handleError(error)
      }
    }

    return {
      loginFormMode,
      token,
      userInfo,
      menus,
      setLoginFormMode,
      setToken,
      setUserInfo,
      getUserMenus,
      loadUserData,
      clearUserData,
      userLogout,
    }
  },
  {
    persist: true,
  },
)
