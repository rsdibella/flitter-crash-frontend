import { createStore } from 'vuex'
import flitsModule from './flits'
import loginModule from './login'
import usersModule from './users'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    login: loginModule,
    flits: flitsModule,
    users: usersModule
  }
})