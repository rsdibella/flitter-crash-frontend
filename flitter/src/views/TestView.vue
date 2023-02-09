<template>
  
  <br />
  <br />
  <br />
  <br />
  <div>
    <button @click="fetchFlits()">Pedir flits</button>
  </div>
  <br />
  <form>
      <div>
        <input type="text" placeholder="User id" v-model="flitInfo.id_user" required>
      </div>
      <br />
      <div>
        <input type="text" placeholder="Mensaje" v-model="flitInfo.message" required>
      </div>
      <br />
      <div id="lower">
          <input class="button" type="submit" value="Crear flit" @click="createNewFlit(flitInfo)">  
      </div>
      
  </form>
  <br />
  <div>
    <button @click="fetchUsers()">Pedir usuarios</button>
  </div>
  <br />
  <div>
    <button @click="goProfile()">Ir al perfil</button>
  </div>


    
</template>

<script>

import useFlits from '@/composables/useFlits';
import useUsers from '@/composables/useUsers';
import router from '@/router';
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
    const {fetchUsers} = useUsers()

    function goProfile() {
      router.push({name: "profileView"})
    }

    return {
        fetchFlits,
        createNewFlit,
        flitInfo,
        fetchUsers,
        goProfile
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
