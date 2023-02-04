<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    
  </div>

  <button @click="fetchFleets()">Pedir flits</button>
</template>

<script>
// @ is an alias to /src

import useFleets from '@/composables/useFleets';
export default {
  name: 'HomeView',
  components: {
    
  },
  setup() {

    const {fetchFleets} = useFleets()

    


    return {
        fetchFleets
    }       
  }
}
</script>
