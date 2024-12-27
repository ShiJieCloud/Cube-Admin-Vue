import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { createApp } from 'vue'

import App from './App.vue'

import 'element-plus/dist/index.css'
import GlobalComponents from '@/components/index'
import { setupRouter } from '@/router'
import pinia from '@/stores'

import 'nprogress/nprogress.css'

// 统一导入样式文件
import '@/assets/styles/main.scss'

// 统一注册全局组件
import 'virtual:svg-icons-register'

// 引入 iconfont 图标
import '@/assets/iconfont/iconfont.js'

// 创建 Vue 应用
const app = createApp(App)

app.use(pinia)
app.use(ElementPlus, { locale: zhCn })
app.use(GlobalComponents)

async function startApp() {
  // 挂载路由
  await setupRouter(app)
  app.mount('#app')
}

// 启动应用
startApp().catch((error) => {
  console.error('启动应用时发生错误:', error)
})
