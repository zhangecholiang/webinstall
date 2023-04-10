import { createRouter, RouteRecordRaw, Router, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  }
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router