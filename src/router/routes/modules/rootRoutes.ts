import { RouteRecordRaw } from 'vue-router'

/**
 * <h4>根路由配置</h4>
 * 配置应用中的根路由信息
 */
const rootRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Root',
    redirect: '/home',
    component: () => import('@/layout/index.vue'),
    children: [],
  },
]

export default rootRoutes
