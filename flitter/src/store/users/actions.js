import flitterApi from "@/api/flitterApi";


const actions = {
  async fetchUsers({ commit }) {

    const { data } = await flitterApi.get("/users")

    commit("setUsers", data);

  },

  async signUp({ commit }, userInfo) {

    const { data } = await flitterApi.post("/users/signup", userInfo)

    commit("setUser", data.user);

  },
 
};

export default actions
