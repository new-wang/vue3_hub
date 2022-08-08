import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 全局样式
import 'styles/index.scss'

import elementplus from 'plugin/element-plus'
import router from './router/router'
import pinia from './pinia/pinia'



createApp(App)
.use(elementplus)
.use(router)
.use(pinia)
.mount('#app')
