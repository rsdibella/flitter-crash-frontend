import flitterApi from "@/api/flitterApi";
/* import { AxiosResponse } from "axios"; */

const actions = {
  async fetchFleets({ commit }) {
    
    commit("setIsLoading", true);

    /* const { data } = await flitterApi.get<unknown, AxiosResponse<Product[]>>(
      "/products"
    ); */

    const { data } = await flitterApi.get("/feed/fleets");

    commit("setIsLoading", false);

    commit("setFleets", data);
  },
 
};

export default actions;

