<template>
  <div>
    <h2>aaa</h2>
    <TestPropsEmitParentTest 
      :setupBooks="setupBooks" 
      :dataBooks="dataBooks"
      @custom-event="parentMethod"
    />
  </div>
</template>

<script>
import { reactive } from "vue"

export default {
  setup() {
    const setupBooks = reactive([
      {
        title: "setupタイトル1",
        author: "setup著者1",
      },
      {
        title: "setupタイトル2",
        author: "setup著者2",
      },
    ])

    return {
      setupBooks,
    }
  },

  data() {
    return {
      dataBooks: [
        {
          title: "dataタイトル",
          author: "data著者",
        },
      ],
    }
  },

  methods: {
    parentMethod(e) {
      console.log(e)
    }
  },

}
</script>
