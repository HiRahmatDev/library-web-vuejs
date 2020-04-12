import Vue from 'vue';
import swal from 'vue-sweetalert2';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(swal);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
