import { IMenuTree } from '@/types/models/menu'
import { http } from '@/utils/http'

// 获取用户菜单权限
export const getUserMenusApi = (): Promise<IMenuTree[]> => {
  return http.get('/user/menus')
}
