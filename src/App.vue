<template>
  <div id="app">
    <navbar></navbar>

    <router-view />

    <foot></foot>
  </div>
</template>

<script>
import navbar from "./components/navbar.vue";
import foot from "./components/foot.vue";

export default {
  components: { navbar, foot },
  data() {
    return {
      cart: false,
    };
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  background-color: rgb(252, 251, 242);
}
</style>
