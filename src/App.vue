<template>
  <div id="app">
    <navbar></navbar>

    <router-view />
  </div>
</template>

<script>
import navbar from "./components/navbar.vue";

export default {
  components: { navbar },
};
</script>

<style lang="scss">
body {
  margin: 0;
  background-color: rgb(252, 251, 242);
}

#app {
  overflow: hidden;
}
</style>
