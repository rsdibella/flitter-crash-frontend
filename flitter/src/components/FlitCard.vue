<template>
  <div class="flit-card">
    <div class="flit-author">
        <img src="../assets/flitterLogo2-removebg-preview.png">
        <h3>{{ flit.id_user.name }}</h3>
      </div>

    <div class="flit-info">
      <div class="flit-message">
          <p>{{ flit.message }}</p>
      </div>

      <div class="flit-date">
          <p>{{ flit.createdAt }}</p>
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

    * {
      border: dashed 1px red
    }

    .flit-card {
      width: 300px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: white;
      border: 0.5px solid black;
      border-radius: 4px;
      margin: 10px;
    }

    .flit-info {
      width: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      color: black;
    }

    .flit-info > p, h3 {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      color: black;
    }

    .flit-author {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-self: flex-start;
    }

    .flit-author > img {
      width: 40px;
    }

    .flit-message {
      font-style: italic;
      text-align: left;
      background-color: rgb(233, 236, 215);
      padding: 20px;
      width: 100%;
      border: 0.5px solid rgb(171, 175, 143);
      border-radius: 6px;
    }

    .flit-date {
      width: 100%;
    }
    .flit-date > p {
      font-size: 12px;
      padding-top: 5px;
      text-align: end;
    }
  </style>