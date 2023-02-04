import { useStore } from "vuex"
/* import { computed } from "vue"; */

const useUsers = () => {
    const store = useStore()

    return {

        //Actions
        signUp: (userInfo) => store.dispatch("user/signUp", userInfo), 
        fetchUsers: () => store.dispatch("user/fetchUsers"), 
        
    }
}

export default useUsers