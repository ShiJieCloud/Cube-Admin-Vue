import axios, { AxiosResponse } from 'axios'

import { ApiStatusCode } from '@/constants/statusCode'
import { useUserStore } from '@/stores/user'

// 创建axios实例
export const http = axios.create({
  // 设置基础URL
  baseURL: import.meta.env.VITE_API_URL,
  // 设置请求超时时间
  timeout: import.meta.env.VITE_API_TIMEOUT,
  // 允许跨域请求时发送凭据（比如 cookies）
  withCredentials: true,
})

// 添加请求拦截器
http.interceptors.request.use(
  (config) => {
    const { token } = useUserStore()

    // 如果有 token，添加 Authorization 头
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 添加响应拦截器
http.interceptors.response.use(
  (response: AxiosResponse) => {
    const { code, message, data } = response.data

    if (code === ApiStatusCode.SUCCESS) {
      return data
    } else {
      return Promise.reject(new Error(message))
    }
  },
  (error) => {
    return Promise.reject(new Error(error.response))
  },
)
