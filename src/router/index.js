import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Story from '../views/Story.vue'
import bMap from '../views/BrandMap.vue'
import ShopHome from '../views/ShopHome.vue'
import product from '../views/product.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path:'/story',
    name:'story',
    component:Story
  },

  {
    path:'/brandmap',
    name:'brandmap',
    component:bMap
  },

  {
    path:'/shop',
    name:'shop',
    component:ShopHome
  },

  {
    path:'/shop/product/:productID',
    name:'product',
    component:product,
    props:true
  },

  {
    path:'/about',
    name:'about',
    component:About
  },

  {
    path:'/login',
    name:'login',
    component:Login
  }
]

const router = new VueRouter({
  routes
})

export default router
