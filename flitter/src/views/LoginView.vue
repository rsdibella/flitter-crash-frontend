<template>
    <br />
    <div>
      <h1>Inicio de sesión</h1>
    </div>
    <br />
    <div class="login-form">
      <form>
        <div>
          <input type="email" placeholder="E-mail" v-model="credentials.email" required>
        </div>
        <br />
        <div>
          <input type="password" placeholder="Password" v-model="credentials.password" required>
        </div> 
        <br />
        <div id="lower">
            <input type="submit" value="Login">  
        </div>
      </form>
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

.login-form {
  display: flex;
  flex-direction: column;
}

</style>