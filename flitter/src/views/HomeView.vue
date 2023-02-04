<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    
  </div>
  <div>
    <button @click="fetchFlits()">Pedir flits</button>
  </div>
  

  <div class="create-flit">
      <form>
        <div>
          <input type="number" placeholder="id user" v-model="flit.id_user" required>
        </div>
        <br />
        <div>
          <input type="string" placeholder="Mensaje" v-model="flit.message" required>
        </div> 
        <br />
        <div id="lower">
            <input type="submit" value="Crear flit" @click="createNewFlit(flitInfo)">  
        </div>
      </form>
    </div>
</template>

<script>

import useFlits from '@/composables/useFlits';
import {  ref } from 'vue';
export default {
  name: 'HomeView',
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

.login-form {
  display: flex;
  flex-direction: column;
}

</style>
