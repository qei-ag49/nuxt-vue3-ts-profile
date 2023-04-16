<template>
  <div>
    <div>VuexTest</div>
    <div>{{ count }}</div>
    <button @click="increment">+</button>
  </div>
</template>

<script>
// import { computed } from "vue"
import { computed, defineComponent } from "vue"
import { useStore } from "vuex"
// import { useStore } from '@nuxtjs/composition-api'

// const store = useStore()
// const count = computed(() => {
//   return store.state.count
// })

// const increment = () => {
//   store.commit("increment")
// }

export default defineComponent({
  setup() {
    const store = useStore()
    const count = computed(() => {
      return store.state.count
    })
    const increment = () => {
      store.commit("increment")
    }
    return {
      count,
      increment
    }
  }
})
//     return {
//       count, increment,
//     }

// export default {
//   setup() {
//     const store = useStore()
//     const count = computed(() => {
//       return store.state.count
//     })

//     const increment = () => {
//       store.commit("increment")
//     }

//     return {
//       count, increment,
//     }
//   }
// }
</script>

<style lang="scss">
  
</style>