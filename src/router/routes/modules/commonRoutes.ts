import type { RouteRecordRaw } from 'vue-router'

/**
 * <h4>公共路由配置</h4>
 * 配置应用中的公共路由信息
 */
const commonRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/index.vue'),
    meta: {
      title: '用户登录',
      description: '用户登录',
    },
  },
]

export default commonRoutes
