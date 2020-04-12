import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/pages/login';
import Products from '@/components/pages/products';
import Dashboard from '@/components/dashboard';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*', // 隨機相對路徑 /* ，防止使用者跑到不存在的頁面
      redirect: '/login' // 重新導向頁面
    },
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld,
    //   meta: {requiresAuth: true}
    // },
    {
      path: '/login',
      name: 'login page',
      component: Login
    },
    {
      path: '/admin',
      name: 'dashboard',
      component: Dashboard,
      children: [
        {
          path: 'products',
          name: 'Products',
          component: Products,
          meta: {requiresAuth: true}
        }
      ]
    }
  ]
})
