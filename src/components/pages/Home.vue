<template>
  <!-- First View starts -->
  <first-view></first-view>
  <!-- First view ends -->

  <!-- Category Starts -->
  <category-view></category-view>
  <!-- Category ends -->

  <!-- Latest Arrivals Starts -->
  <latest-arrivals-view></latest-arrivals-view>
  <!-- Latest Arrivals Ends -->

  <!-- Bottom Starts -->
  <bottom-view></bottom-view>
  <!-- Bottom Ends  -->
</template>

<script>

import FirstView from "../layout/home/FirstView.vue";
import CategoryView from "../layout/home/CategoryView.vue";
import LatestArrivalsView from '../layout/home/LatestArrivalsView.vue';
import BottomView from "../layout/home/BottomView.vue";



export default {
  components: {
    FirstView,
    CategoryView,
    LatestArrivalsView,
    BottomView,
  },
  data() {
    return {
      imagesObject: [
        {
          src: "assets/images/seventhImage.jpg",
          id: 1,
          alt: null,
        },
        {
          src: "assets/images/fourteenthImage.jpg",
          id: 2,
          alt: null,
        },
        {
          src: "assets/images/5f71e348e62ec 1 (1).jpg",
          id: 3,
          alt: null,
        },
      ],
    };
  },
  computed: {
    getCategories() {
      return this.$store.getters["categories/getCategories"];
    },
    getLatestProducts() {
      return this.$store.getters["latestProducts/getLatestProducts"];
    },
  },
};
</script>

<style scoped>
h1,
h2 {
  font-family: Georgia, "Times New Roman", Times, serif;
}


.shopBtn:hover {
  background: white;
  color: rgb(15, 2, 2);
}



.bottom .insta-icon {
  border-radius: 50%;
}
.bottom svg {
  stroke: white;
  fill: white;
}
</style>