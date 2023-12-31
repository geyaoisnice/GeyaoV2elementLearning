import Vue from 'vue'
import VueRouter from 'vue-router'
import AppView from '../App.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: AppView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
