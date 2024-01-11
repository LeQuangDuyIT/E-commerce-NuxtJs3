<script setup>
const expanding = ref(false);

const SECTION_WIDTH = 25;
</script>

<template>
  <div
    class="fixed top-0 duration-500"
    :class="{ '-translate-x-full': expanding }"
    :style="`right: -${SECTION_WIDTH}vw`"
  >
    <CartIcon v-if="!expanding" @click="expanding = true" class="absolute -translate-x-full" />
    <div class="h-screen flex flex-col bg-black" :style="`width: ${SECTION_WIDTH}vw`">
      <div class="relative">
        <div class="w-2/5 mx-auto py-6 border-b border-b-white">
          <div class="flex justify-center items-center gap-1">
            <CartIcon />
            <h4 class="font-bold text-white text-2xl">Cart</h4>
          </div>
        </div>
        <button
          @click="expanding = false"
          class="absolute top-0 left-0 w-[60px] aspect-square hover:bg-white/30 hover:opacity-100 duration-300"
        >
          <Icon name="ion:md-close" class="text-white text-3xl" />
        </button>
      </div>
      <div class="flex-grow p-4"></div>
      <div class="p-6 bg-white/20">
        <div class="flex justify-between items-end mb-6">
          <p class="text-white text-lg">SUBTOTAL</p>
          <p class="text-[#EABF00] font-bold text-3xl">$ 0.00</p>
        </div>
        <button
          class="w-full py-6 bg-black hover:bg-[#EABF00] font-bold text-white hover:text-black duration-300"
        >
          CHECKOUT
        </button>
      </div>
    </div>
  </div>
</template>
