<template>

   <div class="first-view  h-height60  w-screen">
        <Banner nameofpage="Shop" />
    </div>
    <!-- First View Ends -->

  <!-- Main Starts -->
  <main>
    <div class="head  flex w-screen px-4 xl:px-16 pt-12 pb-4  xl:py-12 justify-between">
      <div class="first flex flex-col items-center xl:items-start ">
        <p class="text-sm text-gray-800 mb-2">
          <span class="cursor-pointer font-medium">Home</span> |
          <span class="cursorsor-pointer font-medium">Products</span>
        </p>
        <h2 class="text-5xl text-red-700 font-medium"  >Shop</h2>
        <p class="mt-4 " >Showing all 12 results</p>
      </div>
    <div class="second">
      <select name="sort" class="w-3/4 cursor-pointer pl-2 pr-8 bg-gray-100 hover:bg-black hover:text-white transition duration-300 py-1  rounded-sm" id="sort">
          <option value="Default">Default sorting</option>
          <option value="popularity">Sort by popularity</option>
          <option value="average">Sort by average rating</option>    
          <option value="latest">Sort by latest</option>    
          <option value="average">Sort by price: low to high</option>    
      </select>
    </div>
    </div>
    
    <div class="content flex  flex-col-reverse  xl:grid grid-cols-3  gap-5 px-8 xl:px-16 py-6 w-screen">
      
      <aside class="col-span-3 row-span-2 xl:col-span-1 xl:block  ">
        
        <div class="search flex flex-col items-start mb-8 xl:mb-20">
          <h2 class="text-3xl">Search</h2>
          <div class="search-container mt-4 flex">
            <input  type="search" placeholder="Search for Product..." class="rounded-sm border border-gray-200 px-2 py-1 outline-none text-sm" name="" id="">
            <input type="button" class="text-white px-2 py-1 rounded-sm" value="Search">
          </div>
        </div>

        <div class="product-category   ">
          <h2 class="text-3xl  text-left">Product Category</h2>
          <ul>
              <li class="flex items-center justify-between pr-8 mt-4 mb-4">
                <a class="hover:text-red-400 transition duration-500 text-gray-500" href="#">Category 1</a>
                <span></span>7
              </li>
              <li class="flex items-center justify-between pr-8 mb-4">
                <a class="hover:text-red-400 transition duration-500 text-gray-500" href="#">Category 2</a>
                <span></span>5
              </li>
              <li class="flex items-center justify-between pr-8 mb-4">
                <a class="hover:text-red-400 transition duration-500 text-gray-500" href="#">Category 3</a>
                <span></span>6
              </li>
              <li class="flex items-center justify-between pr-8 mb-4">
                <a class="hover:text-red-400 transition duration-500 text-gray-500" href="#">Category 4</a>
                <span></span>0
              </li>
              <li class="flex items-center justify-between pr-8 mb-4">
                <a class="hover:text-red-400 transition duration-500 text-gray-500" href="#">Category 5</a>
                <span></span>10
              </li>
              <li class="flex items-center justify-between pr-8 mb-4">
                <a class="hover:text-red-400 transition duration-500 text-gray-500" href="#">Category 6</a>
                <span></span>15
              </li>
          </ul>
        </div>
        
        <div class="filter flex flex-col items-start mt-20 ">
          <h2 class="text-3xl">Filter by Price</h2>
          <div class="slidecontainer w-full flex flex-col items-start my-4">
            <input type="range" min="1" max="100" value="0" class="slider" id="myRange">
          </div>
          <p class="text-sm text-semibold ">From N100 - 10,000</p>
          <button class="bg-red-600 mt-2 hover:bg-red-800 transition duration-200 text-white px-3 rounded py-1">Filter</button>
        </div>
        
      </aside>

      <article class="col-span-3 row-span-1 xl:col-span-2 grid grid-cols-1 xl:grid-cols-3 gap-5 py-12">
        <Product v-for="product in getProducts " :product='product' :key="product.id" />
      </article>
    </div>
  </main>
  <!-- Main Ends -->

</template>

<script>
import Product from '../layout/product.vue';
import Banner from '../layout/Banner.vue';

export default {
  components:{
    Product,
    Banner
  },
  computed:{
    getProducts(){
      return this.$store.getters['products/getProducts'];
    },
  }
}
</script>

<style scoped>

input[type="button"] {
  background: linear-gradient(90deg, #f04c39 50.19%, #f6a73e 100%);
}


/* The slider itself */
.slider {
  -webkit-appearance: none; /* Override default CSS styles */
  appearance: none;
  width: 45%; /* Full-width */
  height: 0.3rem; /* Specified height */
  background: #d3d3d3; /* Grey background */
  outline: none; /* Remove outline */
  opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
  -webkit-transition: 0.2s; /* 0.2 seconds transition on hover */
  transition: opacity 0.2s;
}

/* Mouse-over effects */
.slider:hover {
  opacity: 1; /* Fully shown on mouse-over */
}


</style>