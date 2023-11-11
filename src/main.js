import './assets/main.css'

import { createApp } from 'vue'
import App from './components/App.vue'
import router from './router'
import {createPinia} from 'pinia'


createApp(App).use(createPinia()).use(router).mount('#app')
/*
const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
*/