<template>
  <div>
    <Nav />
    <Main />
    <div class="relative">
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav";
import Main from "./components/Main";

export default {
  name: "App",
  components: {
    Nav,
    Main,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* background-image: url('./assets/bg2.jpg');
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  background-position: center center;
  background-size: contain; */
}
</style>
