import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import pinia from '@/stores'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

// 统一导入样式文件
import '@/styles/main.scss'

// 统一注册全局组件
import 'virtual:svg-icons-register'
import GlobalComponents from '@/components/index'

// 引入 iconfont 图标
import '@/assets/iconfont/iconfont.js'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(ElementPlus, { locale: zhCn })
app.use(GlobalComponents)

app.mount('#app')
