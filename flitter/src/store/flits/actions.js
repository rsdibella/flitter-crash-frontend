import flitterApi from "@/api/flitterApi";

const actions = {
  async fetchFlits({ commit }) {
    
    commit("setIsLoading", true);

    const { data } = await flitterApi.get("/feed/flits");

    commit("setIsLoading", false);

    commit("setFlits", data);

  },
  async createNewFlit({ commit }, flitInfo) {
    
    console.log("Ha entrado")

    commit("setIsLoading", true);


    const { data } = await flitterApi.post("/feed/flits", flitInfo);

    console.log("Hace el post")

    console.log(data)

    console.log("Ha creado el flit")

    commit("setIsLoading", false);
  },
 
};

export default actions;