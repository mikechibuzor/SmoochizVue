<template>
    <div class="laProduct h-height45 shadow-md overflow-hidden cursor-pointer transition-all duration-300 ease-linear my-3">
        <div class="prodImg">
            <img class="w-full h-full"  :src="publicPath + '' +product.image" />
        </div>
        <div class="catText p-1 grid pt-1 pb-3 bg-white items-center justify-items-center">
            <h6 class="text-sm font-medium text-gray-500" >{{ product.title }}</h6>
            <h3 class="text-xl mt-1 font-semibold text-gray-700">{{ product.description }}</h3>
            <p>Star</p>
            <p class="mb-1 text-sm font-extrabold mt-1 text-gray-900">N{{ product.price }}</p>
            <button class="add-2-cart  px-4 py-1 text-xs text-white transition-all duration-300 ease-linear hover:text-white hover:bg-black cursor-pointer">ADD TO CART</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['product'],
    data(){
      return {
        publicPath: process.env.BASE_URL,
      }
    },
}
</script>

<style scoped>

.add-2-cart {
  background: linear-gradient(90deg, #f04c39 50.19%, #f6a73e 100%);
}
.add-2-cart:hover{
    background: black;
    color: white;
}

.laProduct:hover {
  box-shadow: 4px 4px 4px rgba(107, 52, 63, 0.651), -4px -4px 4px #eee;
}


</style>