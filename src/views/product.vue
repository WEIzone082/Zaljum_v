<template>
  <main>
    <section class="prod">
      <prod-display :pic="product.PRODUCT_PIC"></prod-display>
      <prod-main :data="product"></prod-main>
    </section>
  </main>
</template>

<script>
import prodDisplay from "../components/product/prod_display.vue";
import prodMain from "../components/product/prod_main.vue";

export default {
  components: { prodDisplay, prodMain },
  props: ["productID"],
  data() {
    return {
      product: null,
    };
  },
  mounted() {
    this.$store.dispatch("getProduct/getOne", this.productID).then(() => {
      this.product = this.$store.getters["getProduct/getProduct"];
    });
  },
};
</script>

<style lang="scss" scoped>
.prod {
  width: 800px;
  display: flex;
  margin: 0 auto;
}
</style>
