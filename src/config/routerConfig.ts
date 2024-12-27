import { RouterNames } from '@/constants/RouterNames'

export class RouterConfig {
  public static readonly loginName: string = RouterNames.LOGIN
  public static readonly welcomeName: string = RouterNames.WELCOME
  public static readonly notFoundName: string = RouterNames.NOT_FOUND
  // 白名单路由列表
  public static readonly whiteRouterList: Set<string> = new Set([
    RouterNames.LOGIN,
    RouterNames.NOT_FOUND,
  ])

  /**
   * 判断某个路由是否在白名单中
   */
  public static isWhiteRouter(path: string): boolean {
    return RouterConfig.whiteRouterList.has(path)
  }
}
