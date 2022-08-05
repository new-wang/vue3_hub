import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import elementplus from 'plugin/element-plus'
import router from './router/router'

createApp(App)
.use(elementplus)
.use(router)
.mount('#app')
