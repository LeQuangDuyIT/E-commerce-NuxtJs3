<script setup>
const inputValue = defineModel();
</script>

<template>
  <div class="flex items-center gap-4 px-4 border">
    <Icon name="ion:search" class="text-2xl opacity-20" />
    <input
      v-model="inputValue"
      class="flex-grow py-4 outline-none"
      placeholder="Enter keyword to search..."
    />
    <div v-if="inputValue && inputValue.length > 0">
      <Icon
        @click="inputValue = ''"
        name="ion:md-close"
        class="text-2xl opacity-20 cursor-pointer"
      />
    </div>
  </div>
</template>

<style></style>
