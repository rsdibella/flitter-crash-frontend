<template>
  <div class="flit-card">
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
</template>
  
  <script>
    import { defineComponent } from "vue";
  
    export default defineComponent({
      props: {
        flit: {
          type: Object,
          required: true,
      },
    }
  
    });
  
  </script>
    
    <style scoped>
    .flit-card {
      width: 300px;
      display: flex;
      border: 1px solid black;
    }
  </style>