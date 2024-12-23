// 用户登录
import { CaptchaData, UsernameLoginRequest, UsernameLoginResponse } from '@/types/models/user'
import { http } from '@/utils/http'

// 用户名密码登录
export const postUsernameLogin = (data: UsernameLoginRequest): Promise<UsernameLoginResponse> => {
  return http.post('/login', data)
}

// 获取验证码
export const getCaptchaApi = (): Promise<CaptchaData> => {
  return http.post('/captcha')
}
