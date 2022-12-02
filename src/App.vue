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
 

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: URWDIN,-apple-system,BlinkMacSystemFont,"PingFang SC","Microsoft YaHei";
  background: rgb(140, 152, 179);
}

.title{
font-weight: 550;

}
.value{
margin-top: 8px;
}
</style>
