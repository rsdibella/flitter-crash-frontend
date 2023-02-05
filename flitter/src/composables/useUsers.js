import { useStore } from "vuex"
/* import { computed } from "vue"; */

const useUsers = () => {
    const store = useStore()

    return {

        //Actions
        signUp: (userInfo) => store.dispatch("users/signUp", userInfo), 
        fetchUsers: () => store.dispatch("users/fetchUsers"), 
        
    }
}

export default useUsers