<template>
  <div>
    <div>CompositionFunctionTest</div>
    <div>
      <p>商品名: {{ item.name }}</p>
      <p>商品名: {{ item.price }}</p>
      <p>商品名: {{ totalPrice }}</p>
      <div>数量</div>
      <button @click="decrement">-</button>
      <button @click="increment">+</button>
    </div>
  </div>
</template>

<script lang="ts">
// import { reactive, computed } from "vue"
import { reactive } from "vue"
import { Merchandise } from "~/types/common"
import useCounter from "~/composables/useCounter"

// script内で合成関数を作成する場合
// const useCounter = (item: Merchandise) => {
//   const increment = () => {
//     item.amount++
//   }
//   const decrement = () => {
//     item.amount--
//   }
//   const totalPrice = computed(() => {
//     return item.price * item.amount
//   })
//   return { increment, decrement, totalPrice }
// }

export default {
  setup() {
    const item: Merchandise = reactive({
      name: "商品名",
      price: 100,
      amount: 0,
    })

    const {
      increment,
      decrement,
      totalPrice
    } = useCounter(item)

    return {
      item,
      increment,
      decrement,
      totalPrice,
    }
    
  },

}
</script>