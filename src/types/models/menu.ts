// 定义菜单项类型
export interface IMenuItem {
  parentId: number // 父级菜单ID
  id: number // 菜单ID
  name: string // 菜单名称
  icon: string // 菜单图标
  sort: number // 排序
  path: string // 路径
  component: string // 组件
  status: string // 状态，使用枚举类型
  createTime: string | Date // 创建时间，可以是字符串或者Date对象
  title: string // 菜单标题
}

// 定义树形菜单类型，继承自 MenuItem，并且增加 children 属性
export interface IMenuTree extends IMenuItem {
  children?: IMenuTree[] // 子菜单项，可以是 MenuTree 数组
}
