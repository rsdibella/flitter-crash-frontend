import { useStore } from "vuex"
import { computed } from "vue";

const useUsers = () => {
    const store = useStore()

    return {

        //Getters
        selectedUser: computed(() => store.getters["users/getSelectedUser"]),
        selfUser: computed(() => store.getters["users/getSelfUser"]),

        //Actions
        signUp: (userInfo) => store.dispatch("users/signUp", userInfo), 
        fetchUsers: () => store.dispatch("users/fetchUsers"),
        fetchSelectedUser: (id_user) => store.dispatch("users/fetchSelectedUser", id_user)
        
    }
}

export default useUsers