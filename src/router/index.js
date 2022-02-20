import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Nuevo from '../views/Nuevo.vue'
import Moneda from '../views/Moneda.vue'
import EstudianTe from '../views/EstudianTe.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path:'/nuevo',
    name:'Nuevo',
    component: Nuevo
  },
  {
    path:'/moneda',
    name:'Moneda',
    component: Moneda
    
  },
  {
    path:'/estudianTe',
    name:'EstudianTe',
    component: EstudianTe
  }
]

const router = new VueRouter({
  routes
})

export default router
