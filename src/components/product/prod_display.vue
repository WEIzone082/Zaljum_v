<template>
  <section class="prod_display">picture section</section>
</template>

<script>
export default {
  props: ["pic"],

  data() {
    return {
      pics: null,
    };
  },
  mounted() {
    this.pics = this.pic.split(",");
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/product/prod_display.scss";
</style>
