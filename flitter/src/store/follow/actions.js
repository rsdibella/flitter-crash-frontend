import flitterApi from "@/api/flitterApi";

const actions = {

  async followAUser(id_user) {

    const { data } = await flitterApi.post("/users/signup", id_user)

  },

};

export default actions