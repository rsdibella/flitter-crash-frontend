<template>
    <div class="details">
      <div v-if="!isLoading">
        <div class="user-details">
            <h1 class="user-name"> {{ selectedUser.name }}</h1>
          </div>
        </div>
      <div v-else>Cargando...</div>
    </div>
  </template>
    
    <script>
    import { defineComponent } from 'vue';
    import useUsers from '@/composables/useUsers';
  
    
    
    export default defineComponent({
      name: 'selectedUserView',
      components: {
  
      },
      props: {
        id: {
          type: Number,
          required: true,
        },
      },
  
      setup(props) {

        console.log("Id del usuario desde detalle", props.id)
          
        const {selectedUser, fetchSelectedUser} = useUsers()

        fetchSelectedUser(props.id)
  
        return {selectedUser}
      }
    });
  </script>
  
  <style scoped>
  
  .product-details {
    min-height: 200px;
    max-width: 70%;
    border: 1px solid black;
    border-radius: 1rem;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
  }
  
  .details {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  .product-img {
    flex: 0 0 100%;
    width: 100%;
    object-fit: cover;
    scroll-snap-align: center;
  }
  
  .product-info {
    display: flex;
    direction: columns;
    
  }
  
  
  .product-info {
      width: 100%;
      background-color: blanchedalmond;
      padding: 2px;
      text-align: end;
      border-radius: 1rem;
  }
  
  .product-description {
    font-size: medium;
  }
  
  .slider-container {
    display: flex;
    width: 100%;
    height: 100vh;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
  }
  
  
  </style>
