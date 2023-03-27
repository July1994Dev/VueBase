import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../pages/Home/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () => import('../pages/Home/Home.vue')
  },
  {
    path: '/Departamentos',
    name: 'Departamentos',
    component: () => import('../pages/RecursosHumanos/Departamentos/Departamentos.vue')
  },
  {
    path: '/Departamentos/Editar/:id',
    name: 'EditDepartamento',
    props: true,
    component: () => import('../pages/RecursosHumanos/Departamentos/Edit.vue')
  },
  {
    path: '/Puestos',
    name: 'Puestos',
    component: () => import('../pages/RecursosHumanos/Puestos/Puestos.vue')
  },
  {
    path: '/Empleados',
    name: 'Empleados',
    component: () => import('../pages/RecursosHumanos/Empleados/Empleados.vue')
  },
  {
    path: '/Ventas',
    name: 'Ventas',
    component: () => import('../pages/Ventas/Documentos/Ventas.vue')
  }
];
// () => import('../pages/Home/Home.vue')
const router = createRouter({
  history: createWebHistory(),
  linkActiveClass:"mm-active",
  routes
});

export default router