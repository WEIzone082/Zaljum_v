<template>
  <div class="prod_display">
    <div class="pd_frame">
      <section class="pd_carrier" ref="pd_main">
        <div class="pd_content" v-for="pic in pics" :key="pic">
          <img :src="require(`../../assets/images/products/${pic}`)" alt="" />
        </div>
      </section>
    </div>

    <section class="product_nav" ref="pd_nav">
      <div class="navContent" v-for="(pic, index) in pics" :key="index">
        <img
          :src="require(`../../assets/images/products/${pic}`)"
          alt=""
          @click="func(index)"
        />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["pic"],

  data() {
    return {
      pics: null,
    };
  },
  methods: {
    func(num) {
      if (num == 0) {
        this.$refs.pd_main.classList = "pd_carrier";
      } else if (num == 1) {
        this.$refs.pd_main.classList = "pd_carrier pd_show1";
      } else {
        this.$refs.pd_main.classList = "pd_carrier pd_show2";
      }
    },
  },
  mounted() {
    this.pics = this.pic.split(",");
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/product/prod_display.scss";
</style>
