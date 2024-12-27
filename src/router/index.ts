import NProgress from 'nprogress'
import { App } from 'vue'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import { AppConfig } from '@/config/appConfig'
import { RouterConfig } from '@/config/routerConfig'
import { createRouterGuards } from '@/router/routerGuards'
import { basicRoutes } from '@/router/routes'
import { useUserStore } from '@/stores/user'

// 路由模式
const routerMode = {
  history: () => createWebHistory(AppConfig.getBaseUrl()),
  hash: () => createWebHashHistory(AppConfig.getBaseUrl()),
}

const whiteNameList = ['Login', 'icons', 'error', 'error-404']

// 创建路由实例
const router = createRouter({
  history: routerMode[AppConfig.getRouterMode()](),
  routes: basicRoutes,
})

/**
 * <h4>reset 重置路由</h4>
 *
 * 该方法会遍历 `router` 中的所有路由，通过 `name` 删除不在白名单中的路由：
 * ```
 * if (name && !whiteNameSet.has(name as string) && router.hasRoute(name)) {
 *  router.removeRoute(name)
 * }
 * ```
 */
export function resetRouter(): void {
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name && !RouterConfig.isWhiteRouter(name as string) && router.hasRoute(name)) {
      router.removeRoute(name)
    }
  })
}

/**
 * <h4>初始化路由</h4>
 *
 * 该方法会创建路由守卫并将其添加到应用中，然后初始化路由器，并确保路由器准备就绪。
 *
 * @async
 * @param {App} app - Vue 应用实例。用于将路由器挂载到应用上。
 * @returns {Promise<void>} 返回一个 Promise，当路由器准备就绪时解决（resolve）。
 *
 * @throws {Error} 如果路由器创建或守卫设置失败，可能抛出错误。
 *
 * @example
 * ```
 * await setupRouter(app);
 * ```
 */
export async function setupRouter(app: App): Promise<void> {
  const userStore = useUserStore()

  // 设置路由守卫（如果有特殊需求可以加入）
  createRouterGuards(router)

  // 检查用户是否登录，有 token 则动态加载路由
  if (userStore.token) {
    await userStore.getUserMenus()
  }

  // 挂载 router
  app.use(router)

  // 确保路由准备好
  await router.isReady()
}

export default router
