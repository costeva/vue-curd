import { createRouter, createWebHistory } from 'vue-router'
import Registro from '../views/Registro.vue'

const routes = [
  {
    path: '/',
    name: 'Registro',
    component: Registro,
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/proyectos',
    name: 'Proyectos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "proyectos" */ '../views/Proyectos.vue'),
    meta:{protegida:true},
  },
  {
    path: '/registro-proyecto',
    name: 'RegistroProyecto',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "RegistroProyecto" */ '../views/RegistroProyecto.vue'),
    meta:{protegida:true},
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Editar" */ '../views/Editar.vue'),
    meta:{protegida:true},
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if(to.meta.protegida){
    if(localStorage.getItem('user')){
      next();
    }else{
      next("/login")
    }
  }else{
    next()
  }
})

export default router;
