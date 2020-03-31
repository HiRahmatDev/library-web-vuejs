import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/Main/Dashboard.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
];

const dashboard = new VueRouter({
  routes,
});

export default dashboard;
