
const mutations = {
  setFleets(state, fleets) {
    state.fleets = fleets;
  },
  setIsLoading(state, value) {
    state.isLoading = value;
  }
};

export default mutations;