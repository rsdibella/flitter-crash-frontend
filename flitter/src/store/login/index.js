
import state from "./state";
import getters from "./getters";
import mutations from "./mutations";

const loginModule = {
    namespaced: true,
    state,
    getters,
    mutations
}

export default loginModule