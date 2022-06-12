import dashboard from './components/admin/dashboard/index.vue';
import categorylist from './components/admin/dashboard/category/list.vue';
import categoryadd from './components/admin/dashboard/category/add.vue';

export const routes = [
    { 
        path: '/', 
        component: dashboard 
    },
    { 
        path: '/category', 
        component: categorylist
    },
    { 
        path: '/add_category', 
        component: categoryadd
    }
  ]