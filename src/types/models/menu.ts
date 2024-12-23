// 定义菜单项类型
export interface MenuItem {
  parentId: number // 父级菜单ID
  id: number // 菜单ID
  name: string // 菜单名称
  icon: string // 菜单图标
  sort: number // 排序
  path: string // 路径
  component: string // 组件
  status: boolean // 状态
  createTime: string // 创建时间
  title: string // 菜单标题
  children?: MenuItem[] // 子菜单项，若没有则不包含此字段
}
