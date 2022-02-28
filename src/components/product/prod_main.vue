<template>
  <div class="prod_main">
    <div class="info">
      <p class="brand">{{ data.PRODUCT_BRAND }}</p>
      <p class="name">{{ data.PRODUCT_NAME }}</p>
      <p class="price">NT$ {{ data.PRODUCT_PRICE }}</p>
    </div>

    <div class="specs">
      <p>尺寸：</p>

      <div class="size">
        <label v-for="option of options" :key="option" :for="option">
          <input type="radio" :id="option" :value="option" v-model="size" />
          <span>{{ option }}</span>
        </label>
      </div>

      <p>數量：</p>

      <div class="quan">
        <input type="number" v-model="quan" name="quantity" min="1" max="5" />
      </div>
    </div>

    <div class="add">
      <button @click="atc" class="atc">
        <i class="bi bi-cart"></i> 加入購物車
      </button>
      <!-- <button>加入最愛</button> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      options: null,
      size: null,
      quan: 1,
      inCart: false,
    };
  },
  methods: {
    atc: function () {
      let cartItem = {};
      let infos = [
        "PRODUCT_ID",
        "PRODUCT_NAME",
        "PRODUCT_PRICE",
        "PRODUCT_BRAND",
        "PRODUCT_PIC",
      ];
      for (const info of infos) {
        cartItem[info] = this.data[info];
      }
      cartItem["QUAN"] = this.quan;
      cartItem["SIZE"] = this.size;

      this.$store.commit("cart/addToCart", cartItem);
      this.inCart = this.$store.getters["cart/isInCart"];
    },
  },
  watch: {
    size: function (val) {
      this.$store.commit("cart/checkCart", {
        pID: this.data.PRODUCT_ID,
        size: this.size,
      });
      this.inCart = this.$store.getters["cart/isInCart"];
    },
  },
  mounted() {
    this.options = this.data.PRODUCT_SIZE.split(",");
    this.size = this.options[0];
    this.$store.commit("cart/checkCart", {
      pID: this.data.PRODUCT_ID,
      size: this.size,
    });
    this.inCart = this.$store.getters["cart/isInCart"];
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/product/prod_main.scss";
</style>
