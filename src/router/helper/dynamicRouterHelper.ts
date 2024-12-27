import type { RouteRecordRaw } from 'vue-router'

import router from '@/router'
import { IMenuTree } from '@/types/models/menu'

const modules = import.meta.glob('@/views/**/*.vue')

/**
 * 加载动态路由
 */
export function loadDynamicRouter(menuList: IMenuTree[]): void {
  registerRoutes(menuList)
}

/**
 * <h4>动态注册路由</h4>
 * 动态注册路由方法，根据菜单树数据创建路由配置并添加到路由系统中。
 * @param {IMenuTree[]} menus - 菜单，包含多级菜单项的信息。
 * @param {string} parentName - 父级路由的名称，默认为 `Root`。用于在添加子路由时指定父路由。
 */
function registerRoutes(menus: IMenuTree[], parentName: string = 'Root'): void {
  menus.forEach((menu) => {
    router.addRoute(parentName, createRouteFormMenu(menu))
  })
}

/**
 * <h4>根据菜单项生成路由对象</h4>
 *
 * 该函数会根据菜单项的属性（如 name、component、path）生成对应的路由对象，
 * 并递归处理子菜单项，构建多级路由结构。
 *
 * @param {IMenuTree} menu - 菜单项对象，包含路由所需的各种信息。
 * @param {string} menu.name - 路由的名称，必须唯一。
 * @param {string} menu.component - 路由所对应的组件名称，该名称会在 `modules` 中查找组件。
 * @param {string} menu.path - 路由的路径。
 * @param {IMenuTree[]} [menu.children] - 子菜单项，默认为空数组，递归处理子路由时使用。
 * @param {string} menu.title - 页面标题，用于设置路由的 meta 信息。
 * @param {string} menu.icon - 页面图标，用于设置路由的 meta 信息。
 *
 * @returns {RouteRecordRaw} 返回一个 `RouteRecordRaw` 类型的路由对象，包含当前路由及其子路由（如果有）。
 *
 * @example
 * const menu = {
 *   name: 'home',
 *   component: 'HomePage',
 *   path: '/home',
 *   title: 'Home',
 *   icon: 'home-icon',
 *   children: [
 *     {
 *       name: 'home.sub',
 *       component: 'SubPage',
 *       path: 'sub',
 *       title: 'Sub Page',
 *       icon: 'sub-icon'
 *     }
 *   ]
 * };
 *
 * const route = createRoute(menu);
 * console.log(route); // 生成包含子路由的 RouteRecordRaw 对象
 */
function createRouteFormMenu(menu: IMenuTree): RouteRecordRaw {
  const { name, component, path, children } = menu

  const componentModule = modules[component]

  const route: RouteRecordRaw = {
    name,
    path,
    component: componentModule,
    meta: {
      title: menu.title,
      icon: menu.icon,
    },
    children: [],
  }

  // 递归生成子路由
  if (children && children.length > 0) {
    // 自动重定向到第一个子路由
    route.redirect = children[0].path
    route.children = children.map(createRouteFormMenu)
  }

  return route
}
