import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import elementplus from 'plugin/element-plus'


createApp(App)
.use(elementplus)
.mount('#app')
