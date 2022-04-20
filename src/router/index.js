import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/user/login')
  },
  {
    path: '/dynamicEcg',
    name: 'dynamicEcg',
    component: () => import('@/views/navigation/dynamicEcg/dynamicEcg')
  },
  {
    path: '/examine',
    name: 'examine',
    component: () => import('@/views/navigation/examine/examine')
  },
  {
    path: '/patientlist',
    name: 'patientlist',
    component: () => import('@/views/navigation/patient/patientlist')
  },
  {
    path: '/addpatient',
    name: 'addpatient',
    component: () => import('@/views/navigation/patient/addpatient')
  },
  {
    path: '/patientdetial',
    name: 'patientdetial',
    component: () => import('@/views/navigation/patient/patientdetial')
  }
]

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes
})

export default router
