<script>
</script>

<template>
  <Container>
    <div class="flex gap-4">
      <div class="basis-[20%]">
        <FilterSection />
      </div>
      <div class="basis-[80%] flex flex-col gap-4">
        <SearchBar />
        <div class="flex flex-wrap gap-4">
          <ProductCard
            v-for="product in DATA_PRODUCTS"
            :key="product.id"
            :product="product"
            class="w-[calc(25%-16px*3/4)]"
          />
        </div>
      </div>
    </div>
  </Container>
</template>

<style></style>
