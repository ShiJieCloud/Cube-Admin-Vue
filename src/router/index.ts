// src/router/index.ts
import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'

import { staticRoutes } from './modules/staticRoutes'

import { AppConfig } from '@/config/appConfig'
import getPageTitle from '@/utils/getPageTitle'

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
  // 填充页面标题
  document.title = getPageTitle(to.meta.title as string)

  next() // 继续导航
})

// 导出路由实例
export default router
