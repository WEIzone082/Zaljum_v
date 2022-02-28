<template>
  <div class="cart_inner">
    <section class="cart_title">
      <h2>購物車</h2>
      <i class="bi bi-x-circle" @click="toggle"></i>
    </section>

    <section class="cart_items">
      <p class="no_item" v-if="!cart_item || cart_item.length == 0">
        購物車中沒有商品
      </p>
      <div
        class="cart_item"
        v-else
        v-for="(item, index) in cart_item"
        :key="index"
      >
        <img
          :src="
            require(`../assets/images/products/${
              item.PRODUCT_PIC.split(',')[0]
            }`)
          "
          alt=""
          class="prod_img"
        />

        <div class="item_info">
          <div class="item_name">
            <p>{{ item.PRODUCT_BRAND }} / {{ item.PRODUCT_NAME }}</p>
          </div>
          <div class="item_detail">
            <p class="size">{{ item.SIZE }}</p>
            <p class="quan">
              x {{ item.QUAN }} | NT {{ item.QUAN * item.PRODUCT_PRICE }}
            </p>
          </div>
        </div>

        <div class="item_del">
          <p class="del" @click="removeFromCart(index)">刪除此商品</p>
        </div>
      </div>
    </section>

    <section class="gt_checkout">
      <div class="cart_total">
        <p>總計 NT${{ cartTotal }}</p>
      </div>
      <div class="checkout_btn">
        <p>前往結帳<i class="bi bi-caret-right"></i></p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart_item: null,
    };
  },
  methods: {
    toggle() {
      this.$emit("close");
    },
    refreshCart() {
      this.$store.commit("cart/getCart");
      this.cart_item = this.$store.getters["cart/getCartItems"];
    },
    removeFromCart(num) {
      this.$store.commit("cart/removeItem", num);
    },
  },
  computed: {
    cartTotal: function () {
      let res = 0;
      for (const item of this.cart_item) {
        res += item.PRODUCT_PRICE * item.QUAN;
      }
      return res;
    },
  },
  mounted() {
    this.refreshCart();
    // this.refreshTotal();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/cart.scss";
</style>
