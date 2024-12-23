export interface PhoneLoginData {
  phone: string // 手机号
  captcha: string // 验证码
}

export interface EmailLoginData {
  email: string // 邮箱
  captcha: string // 验证码
}

export interface UsernameLoginRequest {
  username: string
  password: string
  captcha: string
  captchaId: string
  rememberMe: boolean
}

export interface ResetPasswordData {
  phone: string
  captcha: string
  password: string
  confirmPassword: string
}

export interface RegisterFormData {
  username: string
  phone: string
  captcha: string
  password: string
  confirmPassword: string
}

// 验证码
export interface CaptchaData {
  captchaId: string
  captchaImageBase64: string
}

export interface UsernameLoginResponse {
  token: string
}

export interface UserInfo {
  username: string
  email: string
  nickname: string
  avatarUrl: string
}

// 定义用户数据的接口
export interface UserInfoResponse extends UserInfo {
  createdAt: string
  lastLogin: string
}
