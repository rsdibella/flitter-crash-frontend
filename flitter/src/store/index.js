import { createStore } from 'vuex'
import fleetsModule from './fleets'
import loginModule from './login'
import userModule from './user'

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
    fleets: fleetsModule,
    user: userModule
  }
})
