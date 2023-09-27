import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  { 
    path: '/proyectos',
    name: 'proyectos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "proyectos" */ '../views/ProyectosView.vue'),
    meta: {protect:true}
  },
  {
    path: '/reg-proyects',
    name: '/reg-proyects',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "reg-proyects" */ '../views/CreateView.vue'),
    meta: {protect:true}

  },
  {
    path: '/editar-proyect/:id',
    name: '/editar-proyect',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "editar-proyect" */ '../views/EditarView.vue'),
    meta: {protect:true}

  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach(
  (to, from, next)=>{
    if(to.meta.protect){
      if(localStorage.getItem("user")){
        next()
      }else{
        next("/login")

      }
    }else{
      next()
    }
  }
)

export default router
