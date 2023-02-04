import { createStore } from 'vuex'
import flitsModule from './flits'
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
    fleets: flitsModule,
    user: userModule
  }
})
