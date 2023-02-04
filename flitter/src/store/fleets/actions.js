import flitterApi from "@/api/flitterApi";
/* import { AxiosResponse } from "axios"; */

const actions = {
  async fetchFleets({ commit }) {
    
    commit("setIsLoading", true);

    const { data } = await flitterApi.get("/feed/flits");

    console.log("Hace la petición")

    commit("setIsLoading", false);

    commit("setFleets", data);

    console.log("Establece los flits")
  },
 
};

export default actions;

