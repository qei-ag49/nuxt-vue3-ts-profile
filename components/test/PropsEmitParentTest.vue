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

    <button @click="emitTest">emitテスト999</button>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from "vue"
import { Book } from "~/types/common";

const props = defineProps({
  setupBooks: {
    type: Object,
    default: () => ({
      title: "",
      author: "",
    }),
    validator: (value: Book) => {
        if (typeof value.title === "string" && typeof value.author === "string") {
          return true;
        }
        console.warn("Invalid myData prop: ", value);
        return false;
      },
  },
  dataBooks: {
    type: [String, String]
  },
})

// console.log(props.setupBooks[0].title)
console.log(props.dataBooks)

const emit = defineEmits([
  "custom-event",
])

const emitTest = () => {
  emit("custom-event", "子の値")
}

</script>

<style lang="scss">
  
</style>