<template>
  <div class="login-wraper">
    <div class="login-form">
      <h1>Inicio de sesión</h1>
      <form>
        <div>
          <input type="email" placeholder="Email" v-model="credentials.email" required>
        </div>
        <br />
        <div>
          <input type="password" placeholder="Password" v-model="credentials.password" required>
        </div> 
        <br />
        <div id="lower">
            <input class="button" type="submit" value="Login" @click="showCredentials">  
        </div>
      </form>
    </div>
  </div>
 </template>
  
<script>

  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'loginView',
    components: {
      
    },
  
  setup() {

    const email = ref(null)
    const password = ref(null)

    const credentials = ref({
      email: null,
      password: null
    })

    return {
      email,
      password,
      credentials,
    }       
  }
});

  
</script>

<style scoped>

.login-wraper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh
}
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 300px;
  align-items: center;
  padding: 20px 40px;
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

}

input {
  padding: 5px 5px;
  border-style: none;
  border: solid 0.8px #2c3e50;
  border-radius: 5px;
  color: #00172d;
}

.login-form .button {
  width: 100%;
  padding: 5px 5px;
  margin-top: 15px;
  margin-bottom: 20px;
  border-style: none;
  border: solid 1px #00172d;
  border-radius: 5px;
  background-color: unset;
  font-weight: bolder;
  color: #00172d;
}

</style>