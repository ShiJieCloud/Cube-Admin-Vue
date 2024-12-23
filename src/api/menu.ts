import { MenuItemResponse } from '@/types/models/menu'
import { http } from '@/utils/http'

export const getMenuList = (): Promise<MenuItemResponse> => {
  return http.get('/menu')
}
