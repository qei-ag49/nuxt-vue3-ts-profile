<template>
  <div>
    <div>PropsEmitParentTest</div>
    <!-- <div>{{ setupBooks }}</div> -->
    <ul>
      <li v-for="(book, index) in setupBooks" :key="index">
        {{ book.title }}
      </li>
    </ul>
    <div>{{ dataBooks }}</div>

    <button @click="emitTest">emitテスト</button>

    <PropsEmitChildTest 

    />
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  props: {
    setupBooks: Array,
    dataBooks: Array,
  },
  // setup(props) {
  //   console.log(props.setupBooks[0].title)
  //   console.log(props.dataBooks)
  // },

  // context: attr, slots, emitの3つの機能が使用可能
  // 分割代入も可能
  // propsが不要の場合は、 setup(_, context){}
  setup(props, { emit }) {
    console.log(props.setupBooks[0].title)
    console.log(props.dataBooks)

    const emitTest = () => {
      // 第2引数にcontextが渡ってきた場合はこっち
      // context.emit("custom-event", "子の値")
      emit("custom-event", "子の値")
    }

    return {
      emitTest,
    }
  },

  
}
</script>

<style lang="scss">
  
</style>