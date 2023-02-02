import { useStore } from "vuex"
import { computed } from "vue";

const useLogin = () => {
    const store = useStore()

    return {
        //Getters
        getToken: computed(() => store.getters['login/getToken']),

        //Mutations
        logout: (value) => store.commit("login/deleteToken", value),

        /* //Actions
        login: (credentials) => store.dispatch("login/login", credentials) */
        
    }
}

export default useLogin