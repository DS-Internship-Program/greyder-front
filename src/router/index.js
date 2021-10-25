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
    name: 'login',
    component: () => import('../components/auth/Auth.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;