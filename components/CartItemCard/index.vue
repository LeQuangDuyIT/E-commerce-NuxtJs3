<script setup>
const { cartItem } = defineProps({
  cartItem: {
    type: Object,
    default: {}
  },
  isEnd: {
    type: Boolean,
    default: false
  }
});
const { id, name, price, thumbnailFront } = cartItem;
const hovering = ref(false);
const { handleChangeQuantity, handleDeleteItem } = useCart();
</script>

<template>
  <div
    class="relative flex items-center justify-between p-4 text-white"
    :class="{ 'border-b border-b-white/20': !isEnd, 'bg-white/10': hovering }"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <div class="h-full flex items-center gap-2">
      <div class="h-full">
        <img :src="`/_nuxt/assets/images/products/${thumbnailFront}`" :alt="name" class="h-full" />
      </div>
      <div>
        <h3>{{ name }}</h3>
      </div>
    </div>
    <div class="flex flex-col items-end gap-2">
      <h5 class="text-lg font-semibold text-[#EABF00]">$ {{ price }}</h5>
      <div class="flex items-center h-8">
        <button
          class="h-full flex items-center px-0.5 rounded-l bg-white/40 hover:bg-white/60 hover:text-black"
          @click="handleChangeQuantity(id, -1)"
        >
          <Icon name="ion:minus" />
        </button>
        <input
          type="number"
          v-model="cartItem.quantity"
          class="remove-arrow h-full w-10 px-2 py-1 outline-none text-black"
          min="1"
        />
        <button
          class="h-full flex items-center px-0.5 rounded-r bg-white/40 hover:bg-white/60 hover:text-black"
          @click="handleChangeQuantity(id, 1)"
        >
          <Icon name="ion:md-add" />
        </button>
      </div>
    </div>
    <button
      v-if="hovering"
      class="flex justify-center items-center absolute top-0 right-0 w-6 h-6 bg-white/20 hover:bg-white/60 hover:text-black"
      @click="handleDeleteItem(id)"
    >
      <Icon name="ion:md-close" />
    </button>
  </div>
</template>

<style scope>
.remove-arrow::-webkit-inner-spin-button,
.remove-arrow::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.remove-arrow {
  -moz-appearance: textfield;
}
</style>
