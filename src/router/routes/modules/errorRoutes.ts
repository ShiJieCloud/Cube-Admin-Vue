import type { RouteRecordRaw } from 'vue-router'

/**
 * <h4>错误路由配置</h4>
 * 配置应用中的错误路由信息
 */
const errorRoutes: RouteRecordRaw[] = [
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    meta: {
      title: 'PageNotFound',
      hideInMenu: true,
      hideInTabs: true,
    },
    component: () => import('@/views/Home/index.vue'),
  },
]

export default errorRoutes
