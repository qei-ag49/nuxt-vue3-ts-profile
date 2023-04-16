<template>
  <div>
    <div>
      aaaa
    </div>
    <p>{{ age }}</p>
    <p>reactive: {{ book.title }}</p>
    <p>reactive: {{ book.author[0] }}</p>
    <!-- <p>reactiveToRefs: {{ titleRef }}</p> -->
    <!-- <p>reactiveToRefs: {{ authorRef }}</p> -->
    <button @click="btnClick">クリック</button>
    <p>computed: {{ totalPrice }}</p>
    <div>watch: <input v-model="search"></div>
    <div>watchEffect: <input v-model="searchEffect"></div>
  </div>
</template>

<script>
import {
  ref, reactive, toRefs,
  computed, watch, watchEffect,
  onMounted
} from "vue"

export default {
  setup() {
    let name = "大谷"
    const age = 30
    const nameRef = ref("錦織")
    console.log(nameRef)

    const book = reactive({
      title: "タイトル",
      author: ["大谷", "伊藤"]
    })

    const bookToRefs = reactive({
      titleRef: "タイトル2",
      authorRef: ["大谷2", "伊藤2"]
    })

    const item = reactive({
      price: 100,
      number: 1,
    })

    const totalPrice = computed(() => {
      return item.price * item.number
    })

    const count = ref(100)
    const plusOne = computed({
      get: () => count.value + 1,
      set: val => {
        count.value = val - 1
      }
    })
    plusOne.value = 1
    console.log(count.value) // 0

    const btnClick = (e) => {
      console.log(book.title) // thisは不要
      console.log(e)
    }

    const search = ref(null)
    watch(search, (newValue, prevValue) => {
      console.log(`watch: ${search.value}`)
      console.log(`new: ${newValue}`)
      console.log(`prev: ${prevValue}`)
    })

    const searchEffect = ref("")
    watchEffect(() => {
      console.log(`searchEffect: ${searchEffect.value}`)
    })

    onMounted(() => {
      console.log("onMounted")
    })

    // setup関数のreturn。ここで書けばtemplate側で使用できる
    return {
      name,
      age,
      nameRef,
      book,
      ...toRefs(bookToRefs),
      btnClick,
      item,
      totalPrice,
      search,
      searchEffect,
    }

  },

}
</script>