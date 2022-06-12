import dashboard from './components/admin/dashboard/index.vue';
import categorylist from './components/admin/dashboard/category/list.vue';

export const routes = [
    { 
        path: '/', 
        component: dashboard 
    },
    { 
        path: '/category', 
        component: categorylist
    }
  ]