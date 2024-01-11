<script setup>
defineProps({
  // product: {
  //   type: ProductType,
  //   default: {}
  // },
  name: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    default: 0
  },
  thumbnailFront: {
    type: String,
    default: ''
  },
  thumbnailBack: {
    type: String,
    default: ''
  }
});

const isHovering = ref(false);
</script>

<template>
  <div @mouseenter="isHovering = true" @mouseleave="isHovering = false">
    <div class="duration-500 cursor-pointer">
      <img :src="`/_nuxt/assets/images/products/${!isHovering ? thumbnailFront : thumbnailBack}`" />
    </div>
    <div class="flex flex-col items-center gap-4 py-4 px-2">
      <h4 class="cursor-pointer">{{ name }}</h4>
      <div class="w-6 h-0.5 bg-[#EABF00]"></div>
      <h4>$ {{ price }}</h4>
    </div>
    <button class="w-full py-4 text-white bg-black hover:bg-[#EABF00] cursor-pointer">
      Add to card
    </button>
  </div>
</template>

<style></style>
