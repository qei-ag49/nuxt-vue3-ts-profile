<template>
    <div class="grid grid-cols-4 gap-5">
      <!-- <div v-for="(p, index) in products" :key="index">
        <ProductCard :product="p" />
      </div> -->

      <div v-for="(product, index) in products" :key="index">
        <p>
          {{ product.title }}
        </p>
      </div>
    </div>
</template>

<script setup>
// fetch the products
const { data: products } = await useFetch("https://fakestoreapi.com/products")

definePageMeta({
  layout: "products"
})

useHead({
  title: "Nuxt Dojo Merch",
  meta: [{ name: "Nuxt Dojo", content: "Nuxt3 Merch" }]
})
</script>