import { createApp } from 'vue'
import "./assets/style/reset.sass"
import "./assets/style/main.sass"
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATCH}/api/user/check`;
    axios.post(api).then((res) => {
      // console.log(res.data);
      if (res.data.success) next();
      else {
        next({
          path: '/login'
        });
      }
    });
    return;
  }
  next();
})

createApp(App).use(router).use(store).mount('#app')
