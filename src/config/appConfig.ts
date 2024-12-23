import { RouterMode } from '@/constants/routerMode'

export class AppConfig {
  private static readonly appName: string = import.meta.env.VITE_APP_NAME || 'Cube-Admin-Vue'
  private static readonly appTitle: string = import.meta.env.VITE_APP_TITLE || '魔方后台管理系统'
  private static readonly apiUrl: string = import.meta.env.VITE_API_URL || '/'
  private static readonly apiTimeOut: number = Number(import.meta.env.VITE_API_TIMEOUT) || 3000
  private static readonly routerMode: RouterMode =
    (import.meta.env.VITE_ROUTER_MODE as RouterMode) || RouterMode.Hash
  private static readonly baseUrl: string = import.meta.env.VITE_BASE_URL || '/'

  // 获取应用名称
  public static getAppName(): string {
    return this.appName
  }

  // 获取应用标题
  public static getAppTitle(): string {
    return this.appTitle
  }

  // 获取 API URL
  public static getApiUrl(): string {
    return this.apiUrl
  }

  // 获取路由模式
  public static getRouterMode(): RouterMode {
    return this.routerMode
  }

  // 获取基础 URL
  public static getBaseUrl(): string {
    return this.baseUrl
  }

  // 获取 API 请求超时时间
  public static getApiTimeOut(): number {
    return this.apiTimeOut
  }
}
