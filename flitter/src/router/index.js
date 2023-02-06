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
    name: 'signupView',
    component: () => import(/* webpackChunkName: "signupView" */ '../views/SignupView.vue')
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
  {
    path: '/flits',
    name: 'flitsView',
    component: () => import(/* webpackChunkName: "flitsView" */ '../views/FlitsView.vue')
  },
  {
    path: "/flit-details/:id",
    name: "flitDetailView",
    component: () =>
      import("../views/FlitDetailView.vue"),
    props: (route) => {
      console.log(route.params.id);
      return "63e00fd1eb8e83e87837ac39"
    },
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
