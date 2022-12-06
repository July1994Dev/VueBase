import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../pages/Home/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () => import('../pages/Home/Home.vue')
  }
];
// () => import('../pages/Home/Home.vue')
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router