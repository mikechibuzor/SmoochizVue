<template>
  <div class="bottom px-4 xl:px-16 py-8 w-full h-full">
    <h1 class="text-3xl mb-6">Follow us on Instagram</h1>
    <a href="#" class="flex items-center">
      <div
        class="
          insta-icon
          bg-black
          h-12
          w-12
          flex
          items-center
          justify-center
          mr-3
        "
      >
        <svg
          class="h-2/4 w-2/4"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          style="enable-background: new 0 0 512 512"
          xml:space="preserve"
        >
          <g>
            <g>
              <path
                d="M363.273,0H148.728C66.719,0,0,66.719,0,148.728v214.544C0,445.281,66.719,512,148.728,512h214.544
                C445.281,512,512,445.281,512,363.273V148.728C512,66.719,445.281,0,363.273,0z M472,363.272C472,423.225,423.225,472,363.273,472
                H148.728C88.775,472,40,423.225,40,363.273V148.728C40,88.775,88.775,40,148.728,40h214.544C423.225,40,472,88.775,472,148.728
                V363.272z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M256,118c-76.094,0-138,61.906-138,138s61.906,138,138,138s138-61.906,138-138S332.094,118,256,118z M256,354
                c-54.037,0-98-43.963-98-98s43.963-98,98-98s98,43.963,98,98S310.037,354,256,354z"
              />
            </g>
          </g>
          <g>
            <g>
              <circle cx="396" cy="116" r="20" />
            </g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
      </div>
      smooches_lingerie
    </a>
    <div
      class="
        insta-pics
        mt-8
        grid grid-cols-1
        xl:grid-cols-5
        gap-4
        xl:gap-2
        w-full
        h-full
        px-6
      "
    >
      <a
        href="#"
        v-for="n in 5"
        :key="n"
        class="bg-gray-200 h-height30 xl:h-64"
      >
        {{ n }}
      </a>
    </div>
    <div class="buttons mt-12 flex items-center justify-center">
      <a
        href="#"
        class="
          transition
          duration-300
          hover:bg-red-500
          hover:text-white
          bg-gray-700
          mr-4
          rounded
          text-white
          flex
          text-sm
          items-center
          justify-center
          px-1
          xl:text-base
          xl:px-4
          py-1
        "
        >Load more...</a
      >
      <a
        href="#"
        class="
          text-sm
          transition
          duration-300
          hover:bg-black
          hover:text-white
          bg-red-500
          mr-4
          rounded
          text-white
          flex
          items-center
          justify-center
          px-1
          xl:px-4
          py-1.5
        "
      >
        <div class="h-4 w-4 flex items-center justify-center mr-2">
          <svg
            class="h-full w-full"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            style="enable-background: new 0 0 512 512"
            xml:space="preserve"
          >
            <g>
              <g>
                <path
                  d="M363.273,0H148.728C66.719,0,0,66.719,0,148.728v214.544C0,445.281,66.719,512,148.728,512h214.544
                C445.281,512,512,445.281,512,363.273V148.728C512,66.719,445.281,0,363.273,0z M472,363.272C472,423.225,423.225,472,363.273,472
                H148.728C88.775,472,40,423.225,40,363.273V148.728C40,88.775,88.775,40,148.728,40h214.544C423.225,40,472,88.775,472,148.728
                V363.272z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M256,118c-76.094,0-138,61.906-138,138s61.906,138,138,138s138-61.906,138-138S332.094,118,256,118z M256,354
                c-54.037,0-98-43.963-98-98s43.963-98,98-98s98,43.963,98,98S310.037,354,256,354z"
                />
              </g>
            </g>
            <g>
              <g>
                <circle cx="396" cy="116" r="20" />
              </g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        </div>
        Follow on instagram
      </a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.bottom .insta-icon {
  border-radius: 50%;
}
.bottom svg {
  stroke: white;
  fill: white;
}
</style>