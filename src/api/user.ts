// 用户登录
import { CaptchaData } from '@/types/models/user'
import { http } from '@/utils/http'

export const getCaptchaApi = (): Promise<CaptchaData> => {
  return http.post('/captcha')
}
