<template>
  <div>
    <h1>Flits</h1>
  </div>
  <div>
    <div v-if="isLoading">Cargando...</div>
    <div class="flits-list" v-else>
      <FlitCard v-for="flit in flits" :key="flit._id" :flit="flit"/>
    </div>
  </div>
</template>
  
    
<script>
  import { defineComponent } from 'vue';
  import useFlits from '@/composables/useFlits';
  import FlitCard from '@/components/FlitCard.vue';
  
  export default defineComponent({
    name: 'flitsView',
    components: {
      FlitCard
    },

    setup() {
        
      const {flits, isLoading, fetchFlits} = useFlits()

      fetchFlits()
      
    return {
      isLoading,
      flits
    }
  }

});
</script>
  
<style scoped>
  
  .product-list {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    gap: 1rem 1rem;
    margin-left: 10px;
  }

</style>