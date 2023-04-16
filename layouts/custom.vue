<script setup lang="ts">
definePageMeta({ layouts: "custom" })
</script>

<template>
  <div>
    <!-- 不要だったら削除する -->
    <h2>カスタム</h2>
    <slot></slot>
  </div>
</template>


<style lang="scss">
h2 {
  background-color: #f0f0f0;
}
</style>
