<template>
  <section class="lotm">
    <img src="../assets/images/arts.jpg" alt="" class="lotm_cover" />

    <div class="lotm_text">
      <p>Look of the month</p>
      <div class="lotm_by">
        <p>by</p>
        <img
          src="../assets/images/yoshi_logo.svg"
          alt=""
          class="lotm_producer"
        />
      </div>
    </div>

    <!-- <div class="lotm_items">
        <div>
          <router-link
            :to="{ name: 'product', params: { productID: '01364' } }"
          >
            <img
              src="../assets/images/green_02_1.jpg"
              alt=""
              class="lotm_item"
            />
          </router-link>
        </div>
      </div> -->
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/scss/lotm.scss";
</style>
