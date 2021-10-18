import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'app',
    component: App
  },
  {
    path: '/register',
    name: 'register',
    component: ()=> import('../components/auth/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/auth/Auth.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router;