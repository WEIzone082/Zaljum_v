<template>
  <main>
    <lotm></lotm>

    <div class="cats_block">
      <div class="block_name">
        <h2>產品分類</h2>
      </div>
      <section class="cats">
        <div class="cat" v-for="cats in categories" :key="cats.type">
          <img :src="require(`../assets/images/${cats.img}`)" alt="" />
          <div class="cat_name">
            {{ cats.type }}
          </div>
        </div>
      </section>
    </div>

    <div class="prod_block">
      <h2>最新上架</h2>
      <div class="prods">
        <prod-block
          v-for="product in products"
          :key="product.PRODUCT_ID"
          :product="product"
        ></prod-block>
      </div>
    </div>
  </main>
</template>

<script>
import lotm from "../components/lotm.vue";
import prodBlock from "../components/prodBlock.vue";
export default {
  components: { lotm, prodBlock },
  data() {
    return {
      products: [],
      categories: [
        { type: "衣物服飾", img: "apparel.jpg" },
        { type: "裝備配件", img: "acc.jpg" },
        { type: "食品雜貨", img: "goods.jpg" },
      ],
    };
  },
  mounted() {
    this.$store.dispatch("getProducts/getAll").then(() => {
      this.products = this.$store.getters["getProducts/getAllProduct"]
        .reverse()
        .slice(0, 4);
      for (const product of this.products) {
        product["PRODUCT_PIC"] = product["PRODUCT_PIC"].split(",")[0];
      }
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/shopHome.scss";
</style>
