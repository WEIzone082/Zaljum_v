<template>
  <router-link
    :to="{ name: 'product', params: { productID: product.PRODUCT_ID } }"
  >
    <section class="prod">
      <img
        :src="require(`../assets/images/products/${product.PRODUCT_PIC}`)"
        alt=""
      />
      <p class="brand">{{ product.PRODUCT_BRAND }}</p>
      <p class="product">{{ product.PRODUCT_NAME }}</p>
      <p class="price">NT${{ product.PRODUCT_PRICE }}</p>
    </section>
  </router-link>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: black;
}

.prod {
  font-family: "Noto Sans TC", sans-serif;
  text-align: center;
  line-height: 1.8;
  img {
    width: 225px;
  }
  .brand {
    font-size: 14px;
  }
  .product {
    font-size: 18px;
    font-weight: 700;
  }
}
</style>
