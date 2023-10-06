import HomeView from '@/views/HomeView'
export default [
  {
    path: '/', // 根路径
    redirect: '/home' // 重定向到 /home
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/AboutView')
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Demo')
  }
]
