<template>
  <div id="app">
    <div id="nav">
      <NavBar></NavBar>
    </div>
    <router-view />
  </div>
</template>


<script>
import NavBar from "./components/Navbar.vue";

export default {
  name: "app",
  components: {
    NavBar
  }
};
</script>