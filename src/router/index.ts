import NProgress from 'nprogress'
import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'

import { staticRoutes } from './modules/staticRoutes'

import { AppConfig } from '@/config/appConfig'
import getPageTitle from '@/utils/getPageTitle'

// nprogress 进度条配置
NProgress.configure({ showSpinner: false, speed: 500, minimum: 0.1 })

// 定义路由类型
export type RouterType = RouteRecordRaw[]

// 路由模式
const routerMode = {
  history: () => createWebHistory(AppConfig.getBaseUrl()),
  hash: () => createWebHashHistory(AppConfig.getBaseUrl()),
}

// 静态路由
const routes: RouterType = [...staticRoutes]

// 创建路由实例
const router = createRouter({
  history: routerMode[AppConfig.getRouterMode()](),
  routes: routes, // 初始路由仅包含静态路由
})

// 路由守卫
router.beforeEach((to, from, next) => {
  NProgress.start() // 开始进度条
  // 填充页面标题
  document.title = getPageTitle(to.meta.title as string)

  next() // 继续导航
})

router.afterEach(() => {
  NProgress.done() // 结束进度条
})

// 导出路由实例
export default router
