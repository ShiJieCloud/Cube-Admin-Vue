// 用户登录
import { ApiResponse } from '@/types/global'
import { CaptchaData } from '@/types/models/user'
import { http } from '@/utils/http'

export const getCaptchaApi = (): Promise<ApiResponse<CaptchaData>> => {
  return http.post('/captcha')
}
