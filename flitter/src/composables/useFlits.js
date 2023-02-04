import { useStore } from "vuex"
import { computed } from "vue";

const useFlits = () => {
    const store = useStore()

    return {
        //Getters
        fleets: computed(() => store.getters['flits/getFleets']),

        //Actions
        fetchFlits: () => store.dispatch("flits/fetchFlits"), 
        createNewFlit: () => store.dispatch("flits/createNewFlit")
        
    }
}

export default useFlits