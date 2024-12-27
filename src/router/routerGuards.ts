import NProgress from 'nprogress'
import nProgress from 'nprogress'
import type { Router } from 'vue-router'

import { RouterConfig } from '@/config/routerConfig'
import { useUserStore } from '@/stores/user'
import getPageTitle from '@/utils/getPageTitle'

NProgress.configure({ showSpinner: false })

export const createRouterGuards = (router: Router): void => {
  router.beforeEach(async (to, from, next) => {
    nProgress.start()

    const userStore = useUserStore()

    // 判断是否在白名单路由
    if (RouterConfig.isWhiteRouter(to.name as string)) {
      // 登录状态下访问登录页，跳转到欢迎页
      if (to.name === RouterConfig.loginName && userStore.token) {
        return next({ name: RouterConfig.welcomeName })
      }
      return next()
    }

    // 未登录且不是登录页，重定向到登录页
    if (!userStore.token) {
      return to.name === RouterConfig.loginName ? next() : next({ name: RouterConfig.loginName })
    }

    // 用户已登录且菜单未加载，加载动态路由
    if (userStore.menus.length === 0) {
      try {
        await userStore.loadUserData()

        // 检查目标路由是否存在，若不存在，跳转到 404 页面
        if (!router.hasRoute(to.name as string)) {
          return next({ name: RouterConfig.notFoundName })
        }

        return next({ ...to, replace: true })
      } catch (error) {
        console.error('加载菜单或路由时发生错误', error)
        await userStore.clearUserData()
        next({ name: RouterConfig.loginName })
      }
    }

    next()
  })

  router.afterEach((to) => {
    document.title = getPageTitle(to.meta.title as string)
    NProgress.done()
  })

  router.onError((error) => {
    console.error('路由错误', error)
  })
}
