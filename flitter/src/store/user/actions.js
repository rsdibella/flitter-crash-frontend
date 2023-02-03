import flitterApi from "@/api/flitterApi";


const actions = {
  /* async getUserInfo({ commit }) {
    
    commit("setIsLoading", true);

    const token = localStorage.getItem('token')

    const { data, status } = await flitterApi.get<string, AxiosResponse<User>>("/auth/profile", 
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });


    commit("setIsLoading", false);

    commit("setUser", data);
  }, */
  async signUp({ commit }, userInfo) {

    const { data } = await flitterApi.post("/signup", userInfo)

    console.log("Se ha hecho la petición con", userInfo)

    commit("setUser", data);

    console.log("Se ha establecido el user en el state")
  },
 
};

export default actions
