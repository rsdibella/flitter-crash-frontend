<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    
  </div>
  <div>
    <button @click="fetchFlits()">Pedir flits</button>
  </div>
  <form>
      <div>
        <input type="number" placeholder="User id" v-model="flitInfo.id_user" required>
      </div>
      <br />
      <div>
        <input type="text" placeholder="Mensaje" v-model="flitInfo.message" required>
      </div>
      <div id="lower">
          <input class="button" type="submit" value="Crear flit" @click="createNewFlit(flitInfo)">  
      </div>
    </form>


    
</template>

<script>

import useFlits from '@/composables/useFlits';
import {  ref } from 'vue';
export default {
  name: 'testView',
  components: {
    
  },
  setup() {

    const flitInfo = ref({
      id_user: null,
      message: null
    })

    const {fetchFlits, createNewFlit} = useFlits()

    return {
        fetchFlits,
        createNewFlit,
        flitInfo
    }       
  }
}
</script>

<style scoped>

.create-flit {
  display: flex;
  flex-direction: column;
}

</style>
