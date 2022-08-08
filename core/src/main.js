import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import elementplus from 'plugin/element-plus'
import router from './router/router'
import pinia from './pinia/pinia'

// 全局样式
import 'styles/index.scss'

createApp(App)
.use(elementplus)
.use(router)
.use(pinia)
.mount('#app')
