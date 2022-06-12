require('./bootstrap');

window.Vue = require('vue').default;
// 
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// my component
Vue.component('admin-master', require('./components/admin/adminmaster.vue').default);

// 
import { routes } from './routes';

  const router = new VueRouter({
    routes // short for `routes: routes`
  })

const app = new Vue({
    el: '#app',
    router
});
