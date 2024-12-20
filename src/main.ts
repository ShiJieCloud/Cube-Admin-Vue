import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import GlobalComponents from '@/components/index'
import pinia from '@/stores'
import 'element-plus/dist/index.css'

import 'nprogress/nprogress.css'

// 统一导入样式文件
import '@/assets/styles/main.scss'

// 统一注册全局组件
import 'virtual:svg-icons-register'

// 引入 iconfont 图标
import '@/assets/iconfont/iconfont.js'

// 引入 NProgress 样式
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(ElementPlus, { locale: zhCn })
app.use(GlobalComponents)

app.mount('#app')
