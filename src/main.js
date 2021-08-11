import { createApp } from 'vue'
import "./assets/style/reset.css"
import "./assets/style/main.css"
import App from './App.vue'
import store from './store'
import router from './router'

createApp(App).use(router).use(store).mount('#app')
