import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
    {
        path: '/auth',
        name: 'Auth',
        component: () => import('../components/auth/Auth.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: ()=> import('../components/auth/Register.vue')
    }
];

const router = new VueRouter({
    routes
});

export default router;