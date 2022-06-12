require('./bootstrap');

window.Vue = require('vue').default;
// 
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// sweetalert2
import Swal from 'sweetalert2'
window.Swal = Swal;

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  Window.Toast = Toast;

// sweetalert2 end

// vueX
import Vuex from 'vuex'
Vue.use(Vuex)

import storeInfo from './store/store'

const store = new Vuex.Store(storeInfo)

  
// vueX end
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// my component
Vue.component('admin-master', require('./components/admin/adminmaster.vue').default);

// 
import { routes } from './routes';

  const router = new VueRouter({
    routes, // short for `routes: routes`
    // mode: 'history'
    mode: 'hash'
  })

//   
import {Form , HasError, AlertError} from 'vform'
window.Form = Form;

const app = new Vue({
    el: '#app',
    router,
    store
});
