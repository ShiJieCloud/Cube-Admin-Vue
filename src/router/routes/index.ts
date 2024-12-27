import commonRoutes from '@/router/routes/modules/commonRoutes'
import errorRoutes from '@/router/routes/modules/errorRoutes'
import rootRoutes from '@/router/routes/modules/rootRoutes'

/**
 * <h4>基础路由配置</h4>
 * 包含应用中所有的静态路由：
 * <li>`rootRoutes`：应用的根路由配置，通常包含首页、主页面等。</li>
 * <li>`commonRoutes`：共享的公共路由配置，可能包括登录、注销、权限检查等基础功能路由。</li>
 * <li>`errorRoutes`：错误页面路由配置，通常包括 404 页面、500 错误页面等。</li>
 * <h4>路由配置模板</h4>
 * ```
 * {
 *   path: '',  // 匹配路径，表示该路由对应的 URL 路径。例如，'/' 表示根路径。
 *   name: '',  // 路由名称，给路由定义一个唯一的名称，方便在代码中进行导航或者引用
 *   component: '',  // 路由对应的组件，填写组件名或直接导入的组件。例如，'Home' 或 import('@/views/Home.vue')
 *   meta: {  // 路由的元数据
 *     title: '',  // 页面标题，用于在浏览器标签中显示。
 *     description: '',  // 页面描述，用于 SEO
 *     keepAlive: false  // 是否缓存该路由组件
 *   },
 *   beforeEnter: (to, from, next) => {  // 路由独立的进入守卫，在路由跳转前进行额外的控制
 *     ······  // 在这里可以进行权限验证、日志记录等操作
 *     next();  // 必须调用 next() 来继续路由跳转
 *   },
 *   children: [] // 可选，子路由配置
 * }
 * ```
 */
export const basicRoutes = [...rootRoutes, ...commonRoutes, ...errorRoutes]
