/**
 * @enum RouterMode
 *
 * 路由模式枚举，定义了两种路由方式：`Hash` 和 `History`。
 * 1. `Hash`：使用 URL 的 `#` 部分表示路由。
 * 2. `History`：使用 HTML5 History API，更简洁的 URL。
 */
export enum RouterMode {
  /**
   * `Hash` 模式：路由路径以 `#` 开头，如 `example.com/#/home`。
   */
  Hash = 'hash',

  /**
   * `History` 模式：URL 更简洁，无 `#`，如 `example.com/home`。
   */
  History = 'history',
}
