import { useStore } from "vuex"
import { computed } from "vue";

const useFleets = () => {
    const store = useStore()

    return {
        //Getters
        fleets: computed(() => store.getters['fleets/getFleets']),

        //Actions
        fetchFleets: () => store.dispatch("fleets/fetchFleets"), 
        
    }
}

export default useFleets