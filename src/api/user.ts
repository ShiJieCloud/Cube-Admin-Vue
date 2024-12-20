// 用户登录
import { ICaptchaData } from '@/types/models/user'
import { http } from '@/utils/http'

// 获取验证码
export const getCaptchaApi = (): Promise<ICaptchaData> => {
  return http.get('/captcha')
}
