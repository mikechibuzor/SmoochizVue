<template>
  <div class="category w-screen bg-white xl:px-12">
    <div
      class="
        head
        flex
        justify-between
        items-center
        xl:items-stretch
        px-6
        xl:px-16
        py-8
      "
    >
      <h2 class="text-xl xl:text-4xl">Shop by category</h2>
      <h4 class="text-sm xl:text-base">SHOP ALL PRODUCTS</h4>
    </div>
    <div
      class="
        products
        border-1
        px-8
        pb-10
        grid grid-cols-1
        xl:grid-cols-3
        gap-y-10 gap-x-20
      "
    >
      <single-product
        v-for="category in getCategories"
        :category="category"
        :key="category.id"
      ></single-product>
    </div>
  </div>
</template>

<script>
import SingleProduct from "../SingleProduct.vue";
export default {
    components:{
        SingleProduct
    },
    computed:{
        getCategories() {
            return this.$store.getters["categories/getCategories"];
        },
    }
}
</script>

<style>

</style>