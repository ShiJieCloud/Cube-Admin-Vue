// http 状态码
type IHttpStatusCodeType = Record<string, number>

// API 响应码
type IApiStatusCodeType = Record<string, string>

// ApiResponse API 响应数据结构
export interface IApiResponse<T> {
  code: string
  message: string
  data: T
  timestamp: string
}
