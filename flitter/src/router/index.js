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
    component: () => import("../views/FlitDetailView.vue"),
    props: (route) => {
      const id = (route.params.id);
      return id
    },
  },
  {
    path: "/user-profile/:id",
    name: "selectedUserView",
    component: () => import("../views/SelectedUserView.vue"),
    props: (route) => {
      const id = (route.params.id);
      return id;
    },
  },
  {
    path: '/profile',
    name: 'profileView',
    component: () => import(/* webpackChunkName: "profileView" */ '../views/ProfileView.vue')
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
