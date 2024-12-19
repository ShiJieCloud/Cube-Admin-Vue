export interface PhoneLoginData {
  phone: string // 手机号
  captcha: string // 验证码
}

export interface EmailLoginData {
  email: string // 邮箱
  captcha: string // 验证码
}

export interface UsernameLoginData {
  username: string
  password: string
  captcha: string
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
  captcha_id: string
  captcha_image_base64: string
}
