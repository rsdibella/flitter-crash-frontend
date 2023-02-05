import flitterApi from "@/api/flitterApi";


const actions = {
  async fetchUsers({ commit }) {

    console.log("Se llama a la función")

    const { data } = await flitterApi.get("/users")

    console.log("Se ha hecho la petición" )

    commit("setUsers", data);

    console.log("Se han establecido los users en el state")
  },
  async signUp({ commit }, userInfo) {

    console.log("Se llama a la función")

    const { data } = await flitterApi.post("/signup", userInfo)

    console.log("Se ha hecho la petición con", userInfo)

    commit("setUser", data);

    console.log("Se ha establecido el user en el state")
  },
 
};

export default actions
