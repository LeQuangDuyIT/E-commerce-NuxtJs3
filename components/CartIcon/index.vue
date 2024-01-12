<script setup>
const { cartTotal } = useCart();
</script>
<template>
  <button class="flex justify-center items-center w-[60px] aspect-square bg-black">
    <div class="relative">
      <Icon name="ion:cart-sharp" class="text-white text-3xl" />
      <div
        class="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 flex justify-center items-center w-6 aspect-square rounded-full bg-red-500 text-white text-sm"
      >
        {{ cartTotal.quantity }}
      </div>
    </div>
  </button>
</template>
<style></style>
