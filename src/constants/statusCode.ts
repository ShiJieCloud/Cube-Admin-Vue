import { ApiStatusCodeType, HttpStatusCodeType } from '@/types/global'

// http 状态码
export const HttpStatusCode: HttpStatusCodeType = {
  OK: 200, // 请求成功
  CREATED: 201, // 请求已创建
  ACCEPTED: 202, // 请求已接受，但尚未处理
  NO_CONTENT: 204, // 请求成功，但无返回内容
  BAD_REQUEST: 400, // 客户端请求有误
  UNAUTHORIZED: 401, // 用户未认证
  FORBIDDEN: 403, // 请求被禁止
  NOT_FOUND: 404, // 资源未找到
  METHOD_NOT_ALLOWED: 405, // 不允许的方法
  INTERNAL_SERVER_ERROR: 500, // 服务器错误
  SERVICE_UNAVAILABLE: 503, // 服务不可用
}

// API 响应码
export const ApiStatusCode: ApiStatusCodeType = {
  SUCCESS: '0000000000000000',
}
