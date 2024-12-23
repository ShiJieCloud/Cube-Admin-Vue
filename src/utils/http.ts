import axios, { AxiosResponse } from 'axios'

import { AppConfig } from '@/config/appConfig'
import { ApiStatusCode } from '@/constants/statusCode'
import { useUserStore } from '@/stores/user'
import { ApiResponse } from '@/types/global'

// 创建axios实例
export const http = axios.create({
  // 设置基础URL
  baseURL: AppConfig.getApiUrl(),
  // 设置请求超时时间
  timeout: AppConfig.getApiTimeOut,
  // 允许跨域请求时发送凭据（比如 cookies）
  withCredentials: true,
})

// 添加请求拦截器
http.interceptors.request.use(
  (config) => {
    const { userToken } = useUserStore()

    // 如果有 token，添加 Authorization 头
    if (userToken) {
      config.headers['Authorization'] = `Bearer ${userToken}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 添加响应拦截器
http.interceptors.response.use(
  (response: AxiosResponse<ApiResponse<any>>) => {
    const { code, message, data } = response.data

    if (code === ApiStatusCode.SUCCESS) {
      return data
    } else {
      return Promise.reject(new Error(message))
    }
  },
  (error) => {
    // 处理请求错误
    return Promise.reject(new Error(error.response))
  },
)
