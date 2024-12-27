// 用户登录
import { ApiResponse } from '@/types/global'
import {
  CaptchaData,
  UserInfoResponse,
  UsernameLoginRequest,
  UsernameLoginResponse,
} from '@/types/models/user'
import { http } from '@/utils/http'

// 获取用户信息
export const getUserInfoApi = (): Promise<UserInfoResponse> => {
  return http.get('/user/info')
}

// 用户名密码登录
export const postUsernameLogin = (data: UsernameLoginRequest): Promise<UsernameLoginResponse> => {
  return http.post('/login', data)
}

// 获取验证码
export const getCaptchaApi = (): Promise<CaptchaData> => {
  return http.get('/captcha')
}

// 用户退出登录
export const getUserLogoutApi = (): Promise<ApiResponse<void>> => {
  return http.get('/logout')
}
