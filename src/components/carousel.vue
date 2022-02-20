<template>
  <div class="carousel">
    <div class="slider p3" ref="p3" @click="show(3)">
      <div class="overlay"></div>
    </div>
    <div class="slider p2" ref="p2" @click="show(2)">
      <div class="overlay hidden_3"></div>
    </div>
    <div class="slider p1" ref="p1" @click="show(1)">
      <div class="overlay hidden_2"></div>
    </div>
    <div class="slider p0" ref="p0" @click="show(0)">
      <div class="overlay hidden_1"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dir: true,
      page: 3,
      hidden: 3,
      drift: 1,
      slides: null,
      msg: "hey",
    };
  },
  methods: {
    show: function (num) {
      console.log(this.$refs);
    },
  },

  // mounted() {
  //   setTimeout(() => {
  //     window.setInterval(() => {
  //       this.slides = Object.keys(this.$refs).reverse();
  //       if (this.dir) {
  //         this.$refs[this.slides[this.page]].classList.toggle(
  //           "drift_" + String(this.drift)
  //         );
  //         this.$refs[this.slides[this.page]].firstChild.classList.toggle(
  //           "hidden_" + String(this.hidden)
  //         );
  //         this.page--;
  //         if (this.drift != 3) {
  //           this.drift++;
  //           this.hidden--;
  //         }
  //         this.$refs[this.slides[this.page]].firstChild.className = "overlay";
  //         if (this.page == 0) {
  //           this.dir = !this.dir;
  //         }
  //       } else {
  //         this.$refs[this.slides[this.page]].firstChild.classList.toggle(
  //           "hidden_" + String(this.hidden)
  //         );
  //         this.page++;
  //         if (this.page != 0) {
  //           this.$refs[this.slides[this.page]].classList.toggle(
  //             "drift_" + String(this.drift)
  //           );
  //         }
  //         if (this.drift != 1) {
  //           this.drift--;
  //           this.hidden++;
  //         }
  //         this.$refs[this.slides[this.page]].firstChild.className = "overlay";
  //         if (this.page == 3) {
  //           this.dir = !this.dir;
  //         }
  //       }
  //     }, 4000);
  //   }, 4000);
  // },
};
</script>

<style lang="scss">
@import "../assets/scss/carousel.scss";

@for $i from 0 through 3 {
  .p#{$i} {
    background-size: cover;
    background-image: url(../assets/images/demo#{$i}.jpg);
  }
}
</style>

// unable to use eval in mounted()
