import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ayek-t-pimentel',
    name: 'AyekPimentel',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AyekPimentel.vue')
  },
  {
    path: '/romeo-s-momo',
    name: 'RomeoMomo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RomeoMomo.vue')
  },
  {
    path: '/johny-t-pimentel',
    name: 'Johny',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/JohnyPimentel.vue')
  }
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach( () => {
  NProgress.start();
});

router.afterEach( () => {
  NProgress.done();
})

export default router
