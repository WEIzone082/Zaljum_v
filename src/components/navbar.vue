<template>
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

      <i class="bi bi-bag"></i>
    </section>
  </nav>
</template>

<style lang="scss">
@import "../assets/scss/navbar.scss";

// For some reasons it isn't working when add path in scss file.
// so I gotta put it here
nav {
  background-image: url("../assets/images/asdfg.png");
  background-size: cover;
}
</style>
