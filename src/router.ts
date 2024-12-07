import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home/Home.vue'
import Login from './pages/login/Login.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
