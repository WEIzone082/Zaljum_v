<template>
  <div class="nav_wrapper">
    <nav>
      <section class="logo">
        <router-link :to="{ name: 'home' }">
          <img src="../assets/images/nav_logo.png" alt="" />
        </router-link>
      </section>

      <section class="links">
        <router-link :to="{ name: 'story' }">故事報導</router-link>
        <router-link :to="{ name: 'shop' }">線上商城</router-link>
        <router-link :to="{ name: 'brandmap' }">品牌地圖</router-link>
        <router-link :to="{ name: 'about' }">關於我們</router-link>
      </section>

      <section class="actions">
        <router-link :to="{ name: 'login' }">
          <i class="bi bi-person"></i>
        </router-link>

        <div class="cart_icon">
          <i class="bi bi-bag" @click="show"></i>
          <div class="caution" v-if="hasItem"></div>
        </div>
      </section>
    </nav>

    <div class="cart" ref="cart">
      <cart @close="show"></cart>
    </div>
  </div>
</template>

<script>
import cart from "./cart.vue";
export default {
  components: { cart },
  data() {
    return {
      hasItem: false,
    };
  },
  methods: {
    show() {
      this.$refs.cart.classList.toggle("show");
    },
  },
  watch: {
    $route() {
      if (this.$refs.cart.classList.contains("show")) {
        this.$refs.cart.classList.toggle("show");
      }
    },
    "$store.state.cart.cartItems"() {
      if (this.$store.state.cart.cartItems.length > 0) {
        this.hasItem = true;
      } else {
        this.hasItem = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/navbar.scss";

nav {
  background-image: url("../assets/images/asdfg.png");
  background-size: cover;
}
</style>
