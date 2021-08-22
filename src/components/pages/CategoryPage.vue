<template>
  <div class="h-screen">
    <h1>Category page {{ categoryId }}</h1>
  </div>
</template>

<script>
export default {
  state() {
    return {
      categoryId: null,
    };
  },
  created() {
    this.categoryId = this.$route.params.categoryId;
    // const categoryId = this.categoryId;
    // const selectedCategory = this.$store.getters[
    //   "categories/getCategories"
    // ].find((category) => category.id === Number(categoryId));
  },
};
</script>

<style>
</style>