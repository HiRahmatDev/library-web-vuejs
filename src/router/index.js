import Vue from 'vue';
import VueRouter from 'vue-router';
import Landing from '@/views/Main/Landing.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
    meta: {
      title: 'Library - The Best Library Platform Ever',
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Auth/Login.vue'),
    meta: {
      title: 'Login',
    },
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import('@/views/Auth/Logout.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Auth/Register.vue'),
    meta: {
      title: 'Register',
    },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/Main/Dashboard.vue'),
    props: true,
    meta: {
      title: 'Welcome to Library',
    },
  },
  {
    path: '/book',
    name: 'Book',
    component: () => import('@/views/Main/Dashboard.vue'),
    meta: {
      title: 'Welcome to Library',
    },
  },
  {
    path: '/book/:id',
    name: 'BookDetail',
    props: true,
    component: () => import('@/views/Main/BookDetail.vue'),
    meta: {
      title: 'Detail Book',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
