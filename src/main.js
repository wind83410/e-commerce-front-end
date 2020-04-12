// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
axios.defaults.withCredentials = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

// 全域路由守衛：每一次移動頁面都會觸發的函數
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    // 這裡不是 Vue 應用程式本體，所以直接用套件名稱 axios
    axios.post(`${process.env.API_PATH}/api/user/check`).then((response) => {
      if(response.data.success) {
        next();
        return ;
      }
      next('/login');
    })
  } else {next();}
});