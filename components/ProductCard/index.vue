<script setup>
const { product } = defineProps({
  product: {
    type: Object,
    default: {}
  }
});
const { id, name, price, thumbnailFront, thumbnailBack } = product;

const isHovering = ref(false);
const { cart, handleAdd } = useCart();
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
    <button
      class="w-full py-4 text-white bg-black hover:bg-[#EABF00] cursor-pointer"
      @click="handleAdd(product)"
    >
      Add to card
    </button>
  </div>
</template>

<style></style>
