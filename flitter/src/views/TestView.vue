<template>
    
    <button class="btn btn-primary" @click="showButton()">Prueba</button>

</template>

<script>

  import { defineComponent } from 'vue';
  /* import useFleets from '@/composables/useFleets'; */
  
  export default defineComponent({
    name: 'testView',
    components: {
      
    },
  
  setup() {

    /* const {fetchFleets} = useFleets()

    fetchFleets() */

    function showButton() {
        console.log("Botón pulsado")
    }


    return {
        showButton
    }       
  }
});

  
</script>