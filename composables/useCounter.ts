import { computed } from "vue"
import { Merchandise, UseCounter } from "~/types/common"

export default function useCounter(item: Merchandise): UseCounter {
  const increment = () => {
    item.amount++
  }
  const decrement = () => {
    item.amount--
  }

  const totalPrice = computed(() => {
    return item.price * item.amount
  })

  return { increment, decrement, totalPrice }
}
