<template>
  <div class="foot">
    <footer>
      <img src="../assets/images/icon_text.svg" alt="" />
      <section class="social_icons">
        <i class="bi bi-meta"></i>
        <i class="bi bi-instagram"></i>
        <i class="bi bi-youtube"></i>
        <i class="bi bi-twitter"></i>
      </section>
    </footer>
    <section class="info">
      <div class="links">
        <ul>
          <li>
            <router-link :to="{ name: 'about' }">企業サイト</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'about' }">利用規約</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'about' }">お問い合わせ</router-link>
          </li>
        </ul>
      </div>
      <div class="rights">Copyright© Zaljum® All Rights Reserved</div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.foot {
  color: white;
  font-family: "Noto Sans TC", sans-serif;
}

footer {
  width: 100%;
  background-color: rgb(0, 51, 99);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;

  img {
    padding: 22px;
    width: 6%;
    height: auto;
  }

  .social_icons {
    padding-top: 8px;
    padding-bottom: 22px;
    width: 22%;
    display: flex;
    justify-content: space-evenly;

    i {
      font-size: 20px;
    }
  }
}

.info {
  width: 100%;
  background-color: rgb(1, 33, 64);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;

  .links {
    li {
      display: inline-block;
      padding: 18px;
    }
    a {
      text-decoration: none;
      color: white;
      font-weight: 400;
    }
  }

  .rights {
    padding: 22px;
  }
}
</style>
