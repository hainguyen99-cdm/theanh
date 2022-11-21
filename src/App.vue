<script setup></script>
<template>
  <div id="app" class="container" >
    <div>
      <NavbarVue />
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>
<script>
import NavbarVue from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    NavbarVue,

  },
};
</script>

<style>
#app {
 
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  background: rgb(140, 152, 179);
}
</style>
