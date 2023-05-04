<template>
  <div>
    <h2>aaa</h2>
    <TestPropsEmitParentTest 
      :setupBooks="setupBooks" 
      @custom-event="parentMethod"
    />
      <!-- :dataBooks="dataBooks" -->
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue"
import { Book } from "~/types/common"

const dataBooks: Book = reactive<Book>({
  title: "dataタイトル",
  author: "data著者",
})

const setupBooks: Array<Book> = reactive([
  {
    title: "setupタイトル1",
    author: "setup著者1",
  },
  {
    title: "setupタイトル2",
    author: "setup著者2",
  },
])

const parentMethod = (e: Event) => {
  console.log(e)
}

// export default {
//   setup() {
//     const setupBooks = reactive([
//       {
//         title: "setupタイトル1",
//         author: "setup著者1",
//       },
//       {
//         title: "setupタイトル2",
//         author: "setup著者2",
//       },
//     ])

//     return {
//       setupBooks,
//     }
//   },

//   data() {
//     return {
//       dataBooks: [
//         {
//           title: "dataタイトル",
//           author: "data著者",
//         },
//       ],
//     }
//   },

//   methods: {
//     parentMethod(e: Event) {
//       console.log(e)
//     }
//   },
// }
</script>
