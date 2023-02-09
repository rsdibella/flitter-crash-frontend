import flitterApi from "@/api/flitterApi";
import router from "@/router";


const actions = {
  async fetchUsers({ commit }) {

    const { data } = await flitterApi.get("/users")

    commit("setUsers", data);

  },

  async signUp({ commit }, userInfo) {

    const { data } = await flitterApi.post("/users/signup", userInfo)

    commit("setSelfUser", data.user);

    commit("setToken", data.token);

    localStorage.setItem("token", data.token)

    router.push({name: "flitsView"})

  },

  async fetchSelectedUser({ commit }, id) {

    console.log("Entra en la función")

    const { data } = await flitterApi.get(`/users/${id}`) 

    console.log("Hace la petición")

    commit("setSelectedUser", data.user);

    console.log("Establece el user")

  },
 
};

export default actions
