import { createRouter, createWebHashHistory } from 'vue-router'
/* import haveRoleGuard from './role-guards'; */


const routes = [
  {
    path: '/signup',
    name: 'signupView',
    component: () => import(/* webpackChunkName: "signupView" */ '../views/SignupView.vue')
  },
  {
    path: '/login',
    name: 'loginView',
    component: () => import(/* webpackChunkName: "loginView" */ '../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
