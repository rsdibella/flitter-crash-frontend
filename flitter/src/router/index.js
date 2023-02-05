import { createRouter, createWebHashHistory } from 'vue-router'
/* import haveRoleGuard from './role-guards'; */


const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import(/* webpackChunkName: "signupView" */ '../views/HomeView.vue')
  },
  {
    path: '/signup',
    name: 'signUpView',
    component: () => import(/* webpackChunkName: "signupView" */ '../views/SignUpView.vue')
  },
  {
    path: '/login',
    name: 'loginView',
    component: () => import(/* webpackChunkName: "loginView" */ '../views/LoginView.vue')
  },
  {
    path: '/test',
    name: 'testView',
    component: () => import(/* webpackChunkName: "testView" */ '../views/TestView.vue')
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
