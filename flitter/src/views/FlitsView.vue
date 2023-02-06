<template>
    <div>
      <h1>Flits</h1>
    </div>
    <div>
      <div v-if="isLoading">Cargando...</div>
     <!--  <div class="flits-list" v-else>
        <FlitCard v-for="flit in flits" :key="flit._id" :flit="flit"/>
      </div> -->
      <div class="flit-card" v-else>
        <div class="flit" v-for="flit in flits" :key="flit._id">
          <div class="flit-info">
            <div class="flit-author">
                <h1>{{ flit.id_user }}</h1>
            </div>
            <div class="flit-message">
                <h1>{{ flit.message }}</h1>
            </div>
            <div class="flit-date">
                <h1>{{ flit.createdAt }}</h1>
            </div>  
          </div>
        </div>
      </div>
    </div>
  </template>
  
    
    <script>
      import { defineComponent } from 'vue';
      import useFlits from '@/composables/useFlits';
      
      export default defineComponent({
        name: 'flitsView',
        components: {
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