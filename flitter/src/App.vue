<template>
  <router-view/>
  <router-link to="/menu">Menu</router-link>
  <router-link to="/login">Login</router-link>
  <router-link to="/signup">Signup</router-link>
</template>

<style>

* { 
margin: 0;
padding: 0;
box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1a3550;
  background-image: linear-gradient(10deg, #f6ff00, #ff9d00, #fba1ba, #d1f1ccbc, #a0ebdbcc, #6ad6b2bb, #96c990e1, #e6fca9);
  background-size: cover;
  height: 100vh;
  width: 100vw;
}

nav {
  border: dashed 1px red;
  position: fixed;
  top: 0;
  padding: 30px;
  width: 100%
}

nav a {
  border: dashed 1px red;
  font-weight: bold;
  color: #1a3550;
}

nav a.router-link-exact-active {
  color: #ffffff;
}
</style>
