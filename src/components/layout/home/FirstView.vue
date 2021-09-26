<template>
    <div class="first-content">
    <custom-carousel :imagesObject="imagesObject"></custom-carousel>

    <!-- Who we are starts -->
    <div
      class="
        who-we-are
        h-auto
        xl:h-height40
        flex flex-col
        items-center
        justify-center
        w-screen
        px-6
        xl:px-32
      "
    >
      <h2 class="text-3xl xl:text-4xl mt-6 mb-2 text-white">About Us</h2>
      <p class="text-center leading-8 mt-4 text-white text-lg xl:px-20">
        Smooches is an online store that stocks on a variety of female lingerie,
        men underwear, sleepwear, loungewear, swimwear , sex toys and scents at
        best prices.<br />
        The goal at SMOOCHES is to style everyone with the underwear that best
        flatters them.
      </p>
      <p
        class="
          abtBtn
          text-center
          px-10
          cursor-pointer
          transition-all
          duration-200
          hover:bg-black
          hover:text-white
          font-bold
          py-1
          mt-6
          bg-white
          text-red-600
          mb-8
          xl:mb-0
        "
      >
        Read More
      </p>
    </div>
    <!-- Who we are ends -->
  </div>
</template>

<script>
import CustomCarousel from "../../Utilities/CustomCarousel.vue";
export default {
    components:{
        CustomCarousel
    }

}
</script>

<style>
.shopBtn,
.who-we-are {
  background: linear-gradient(90deg, #f04c39 50.19%, #f6a73e 100%);
}

</style>