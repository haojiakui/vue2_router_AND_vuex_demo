import Vue from "vue";
import VueRouter from "vue-router";
import routes from '@/routeList.js'
Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/', // 根路径
//     redirect: '/home' // 重定向到 /home
//   },
//   {
//     path: '/home',
//     name: 'home',
//     component: HomeView
//   },
//   {
//     path: '/about',
//     name: 'about',
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   }
// ]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
