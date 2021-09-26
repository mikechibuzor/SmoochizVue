<template>
  <div class="latest-arrivals w-screen">
    <div class="head grid items-center justify-items-center p-5 w-screen">
      <h2 class="text-center text-white text-2xl xl:text-4xl">
        Latest Arrivals
      </h2>
    </div>
    <div
      class="
        latest-products
        grid grid-cols-1
        xl:grid-cols-4
        px-6
        xl:px-16
        gap-3
      "
    >
      <Product
        v-for="product in getLatestProducts"
        :product="product"
        :key="product.id"
      />
    </div>
    <div class="bottom p-8 flex items-center justify-center">
      <button
        class="
          shopBtn
          text-white
          transition-all
          duration-300
          ease-in-out
          px-4
          py-1
          text-sm
        "
      >
        Shop All Products
      </button>
    </div>
  </div>
</template>

<script>
import Product from "../product.vue";
export default {
    components:{
        Product
    },
    computed: {
        getLatestProducts() {
            return this.$store.getters["latestProducts/getLatestProducts"];
        },
    },
}
</script>

<style>
.latest-arrivals {
  background-color: rgba(131, 30, 50, 0.719);
}
</style>