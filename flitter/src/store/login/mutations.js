const mutations = {
  setToken(state, token) {
    state.token = token;
  },

  deleteToken(state) {
    state.token = null
  }
};

export default mutations;