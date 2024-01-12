<script setup>
const expanding = ref(false);
const { cart, cartTotal } = useCart();

const SECTION_WIDTH = 30;
const CART_TOP_HEIGHT = 120;
const CART_BOTTOM_HEIGHT = 180;
</script>

<template>
  <CartIcon v-if="!expanding" @click="expanding = true" class="fixed top-0 right-0" />
  <div class="fixed top-0 right-0 duration-500" :class="{ 'translate-x-full': !expanding }">
    <div class="h-screen min-w-[350px] flex flex-col bg-black" :style="`width: ${SECTION_WIDTH}vw`">
      <div
        class="relative flex justify-center items-center"
        :style="`height: ${CART_TOP_HEIGHT}px`"
      >
        <div class="w-2/5 mx-auto pb-4 border-b border-b-white">
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
      <div
        class="w-full flex-grow flex flex-col py-2 overflow-auto"
        :style="`height: calc(100vh - ${CART_TOP_HEIGHT}px - ${CART_BOTTOM_HEIGHT}px)`"
      >
        <CartItemCard
          v-for="(item, index) in cart"
          :key="item.id"
          :cartItem="item"
          :isEnd="index === cart.length - 1"
          class="h-[25%]"
        />
      </div>
      <div
        class="flex flex-col justify-center px-6 bg-white/20"
        :style="`height: ${CART_BOTTOM_HEIGHT}px`"
      >
        <div class="flex justify-between items-end mb-6">
          <p class="text-white text-lg">SUBTOTAL</p>
          <p class="text-[#EABF00] font-bold text-3xl">$ {{ cartTotal.amount.toFixed(2) }}</p>
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
