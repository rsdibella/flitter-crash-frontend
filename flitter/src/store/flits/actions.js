import flitterApi from "@/api/flitterApi";

const actions = {
  async fetchFlits({ commit }) {
    
    commit("setIsLoading", true);

    const { data } = await flitterApi.get("/feed/flits");

    commit("setIsLoading", false);

    commit("setFlits", data);

  },
  async createNewFlit({ commit }, flitInfo) {

    commit("setIsLoading", true);


    const { data } = await flitterApi.post("/feed/flits", flitInfo);


    console.log(data)


    commit("setIsLoading", false);
  },
 
};

export default actions;