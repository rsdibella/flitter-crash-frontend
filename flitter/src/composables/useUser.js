import { useStore } from "vuex"
/* import { computed } from "vue"; */

const useUser = () => {
    const store = useStore()

    return {

        //Actions
        signUp: (userInfo) => store.dispatch("user/signUp", userInfo), 
        
    }
}

export default useUser