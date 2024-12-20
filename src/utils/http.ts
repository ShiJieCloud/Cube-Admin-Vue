import axios, { AxiosResponse } from 'axios'

import { AppConfig } from '@/config/appConfig'
import { ApiStatusCode } from '@/constants/statusCode'

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
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`
    return config
  },
  (error) => {
    // 请求错误时的处理
    console.error('请求错误', error)
    return Promise.reject(error)
  },
)

// 添加响应拦截器
http.interceptors.response.use(
  (response: AxiosResponse) => {
    const { code, message, data } = response.data

    if (code === ApiStatusCode.SUCCESS) {
      return data
    }

    // 处理非成功状态码
    return Promise.reject(new Error(message))
  },
  (error) => {
    // 处理请求错误
    return Promise.reject(new Error(error.response))
  },
)
