// http 状态码
type HttpStatusCodeType = Record<string, number>

// API 响应码
type ApiStatusCodeType = Record<string, string>

// API 泛型接口
export interface ApiResponse<T> {
  code: number
  message: string
  data: T
  timestamp: string
}

// ApiResponse API 返回结构
export interface ApiResponse<T> {
  code: number // 状态码
  message: string // 提示消息
  data: T // 返回数据内容
  timestamp: string // 日期
}
