import { RouterMode } from '@/constants/routerMode'

export class AppConfig {
  private static readonly appTitle: string = import.meta.env.VITE_APP_TITLE || 'Cube-Admin-Vue'
  private static readonly apiUrl: string = import.meta.env.VITE_API_URL || '/'
  private static readonly apiTimeOut: number = import.meta.env.VITE_API_TIMEOUT || 3000
  private static readonly routerMode: RouterMode =
    import.meta.env.VITE_ROUTER_MODE || RouterMode.Hash
  private static readonly baseUrl: string = import.meta.env.VITE_BASE_URL || '/'

  // 获取配置的 API URL
  public static getApiUrl(): string {
    return this.apiUrl
  }

  // 获取应用名称
  public static getAppTitle(): string {
    return this.appTitle
  }

  public static getRouterMode(): RouterMode {
    return this.routerMode
  }

  public static getBaseUrl(): string {
    return this.baseUrl
  }

  public static get getApiTimeOut(): number {
    return this.apiTimeOut
  }
}
