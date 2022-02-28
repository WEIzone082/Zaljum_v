import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";

// vuex-persistedstate is deprecated. Look for smth else

Vue.use(Vuex);

const cart = {
  namespaced: true,
  state: {
    cartItems: [],
    inCart: false,
  },
  mutations: {
    getCart(state) {
      if (localStorage.getItem("cart")) {
        state.cartItems = JSON.parse(localStorage.getItem("cart"));
      }
    },
    checkCart(state, prod) {
      if (localStorage.getItem("cart")) {
        state.inCart = false;
        // state.cartItems = JSON.parse(localStorage.getItem("cart"));
        for (const item of state.cartItems) {
          if (item.PRODUCT_ID == prod.pID && item.SIZE == prod.size) {
            state.inCart = true;
          }
        }
      } else {
        state.cartItems = [];
        state.inCart = false;
      }
    },
    addToCart(state, item) {
      if (state.inCart) {
        for (const items of state.cartItems) {
          if (items.PRODUCT_ID == item.PRODUCT_ID && items.SIZE === item.SIZE) {
            items.QUAN += item.QUAN;
          }
        }
      } else {
        state.cartItems.push(item);
        state.inCart = true;
      }

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    removeItem(state, item) {
      state.cartItems.splice(item, 1);
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
  },
  getters: {
    // 回傳tableData
    getCartItems(state) {
      return state.cartItems;
    },
    isInCart(state) {
      return state.inCart;
    },
  },
};

const getProducts = {
  namespaced: true,
  state: {
    data: [],
  },
  actions: {
    getAll: function (context) {
      return axios
        .post("http://localhost:8080/api/zaljum/functions.php", {
          // datas to send into php
          // action: "fetchall",
          action: "getProducts",
        })
        .then(function (response) {
          context.commit("displayAPI", response.data);
        });
    },
  },
  mutations: {
    displayAPI(state, data) {
      state.tableData = data;
    },
  },
  getters: {
    // 回傳tableData
    getAllProduct(state) {
      return state.tableData;
    },
  },
};

const getProduct = {
  namespaced: true,
  state: {
    data: [],
  },
  actions: {
    getOne: function (context, productID) {
      return axios
        .post("http://localhost:8080/api/zaljum/functions.php", {
          // datas to send into php
          // action: "fetchall",
          action: "getProduct",
          pID: productID,
        })
        .then(function (response) {
          context.commit("displayAPI", response.data);
        });
    },
  },
  mutations: {
    displayAPI(state, data) {
      state.tableData = data;
    },
  },
  getters: {
    // 回傳tableData
    getProduct(state) {
      return state.tableData;
    },
  },
};

export default new Vuex.Store({
  namespaced: true,
  modules: {
    getProducts,
    getProduct,
    cart,
  },
  plugins: [createPersistedState()],
});
