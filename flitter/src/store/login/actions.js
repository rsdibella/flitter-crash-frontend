import fakeShopApi from "@/api/fakeShopApi";
import router from "@/router";

const actions = {
  async login({commit}, credentials) {


    const {data, status}  = await fakeShopApi.post("/auth/login", credentials);

    commit("setToken", data.access_token);
    
    localStorage.setItem("token", data.access_token)

    router.push({name: "productsListView"})
  },
  
};

export default actions;