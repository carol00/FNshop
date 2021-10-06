import { createApp } from 'vue'
import "./assets/style/reset.css"
import "./assets/style/main.css"
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'

axios.defaults.withCredentials = true;

createApp(App).use(router).use(store).mount('#app')
