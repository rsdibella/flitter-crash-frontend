import { useStore } from "vuex"
import { computed } from "vue";


const useFlits = () => {
    const store = useStore()

    return {
        //Getters
        flits: computed(() => store.getters['flits/getFlits']),

        //Actions
        fetchFlits: () => store.dispatch("flits/fetchFlits"), 
        createNewFlit: (flitInfo) => store.dispatch("flits/createNewFlit", flitInfo)
        
    }
}

export default useFlits