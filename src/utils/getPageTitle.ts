import { AppConfig } from '@/config/appConfig'

/**
 * 根据页面标题和应用标题拼接新的页面标题
 * @param pageTitle 页面标题
 * @returns 拼接后的标题
 */
export default function getPageTitle(pageTitle?: string): string {
  if (pageTitle) {
    return `${pageTitle} - ${AppConfig.getAppTitle()}`
  }
  return `${AppConfig.getAppTitle()}`
}
