import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import {getToken} from '@/utils/auth.js'

const routes = [
  {
    path: "/:catchAll(.*)", //不识别的path自动匹配Page404
    /*redirect: { name: "home" }*/
    redirect: "/"
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/index'),
    meta: {
      keepAlive: false,
      login: true,
      title: '白医云·诊（医生端）'
    }
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

// 全局拦截
router.beforeEach((to, from, next) => {
  console.log('全局拦截');
  console.log(to,"to");
  console.log(from,"form");
  if (to.meta.title) {
    // 这里设置header部分的title
    document.title =  to.meta.title
  }
  // 验证该访问路径是否需要登录权限
  if (to.meta.login) {
    let adminToken = getToken();
    console.log(adminToken,'全局拦截中得adminToken');
    if (!adminToken) {
      next({
        path: '/login'
      })
      return
    }
  }
  next()
})

export default router
