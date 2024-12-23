// http 状态码
type HttpStatusCodeType = Record<string, number>

// API 响应码
type ApiStatusCodeType = Record<string, string>

// API 泛型接口
export interface ApiResponse<T> {
  code: string
  message: string
  data: T
  timestamp: string
}
