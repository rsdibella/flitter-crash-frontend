<template>
  <router-view/>
  <router-link to="/menu">Menu</router-link>
  <router-link to="/login">Login</router-link>
  <router-link to="/signup">Signup</router-link>
  <router-link to="/test">----TESTVIEW----</router-link>
</template>

<style>

* { 
margin: 0;
padding: 0;
box-sizing: border-box;
}

html, body {
    margin: 0;
    height: 100%;
    
    background-image: linear-gradient(10deg, #f6ff00, #ff9d00, #fba1ba, #d1f1ccbc, #a0ebdbcc, #6ad6b2bb, #96c990e1, #e6fca9);
    background-size: cover;
    overflow-y: scroll;
  
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

nav a.router-link-exact-active {
  color: #ffffff;
}
</style>
