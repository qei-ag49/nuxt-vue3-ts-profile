<template>
  <transition name="fade">
    <div>
      <h2>情報を{{ getSaveLabel }}しますか？</h2>
      
      <div class="mt-4 flex buttonWrapper">
        <button @click="executeClose" class="commonButton">キャンセル</button>
        <button 
          class="commonButton"
          @click="executeSave"
        >
          {{ getSaveLabel }}
        </button>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { Item } from "~/types/common"
import { reactive, computed, defineProps, defineEmits } from "vue"

const props = defineProps({
  eventType: String,
  isStack: Boolean,
  isStackEdit: Boolean,
  item: Object,
  // latestIncrementedId: Number,
  latestIncrementedId: String,
})

const emit = defineEmits([
  "parent-event",
  "parent-event2",
  "parent-event3",
  "parent-event4",
])

const saveLabel = reactive({
  post: "登録",
  put: "更新",
})

// const isShowDetail = computed<boolean>(() => {
//   return false
// })

const getSaveLabel = computed<string>(() => {
  if (props.isStackEdit) {
    return saveLabel.put
  } else {
    return saveLabel.post
  }
})

// Item | undefined
const getInputObj = () => {
  if (!props.item || !props.latestIncrementedId) return null

  return {
    id: props.latestIncrementedId,
    name: props.item.name,
    age: props.item.age,
  }
}

const executeSave = () => {
  // TODO localStorageに登録したい
  if (!!props.item) {
    if (!props.latestIncrementedId) return

    // const inputObj: Item = {
    //   id: this.latestIncrementedId,
    //   name: this.item.name,
    //   age: this.item.age,
    // }

    // 後で任意のものを削除できるように、incrementされるidの値も仕込みたい
    const setInputJson = JSON.stringify(getInputObj)
    localStorage.setItem(`key-${props.latestIncrementedId}`, setInputJson)

    // Rootコンポーネントで定義している配列に、LSに保存する際のIDを追加するメソッドを発火
    emit("parent-event3", props.latestIncrementedId)

  } else {
    alert("必須項目を登録してください！")
  }

  let StoredItem: string | null = localStorage.getItem(`key-${props.latestIncrementedId}`)

  // メッセージ表示後、ダイアログを閉じる
  executeClose()

  // スタック・フォームを閉じる処理
  if (props.isStack) {
    emit("parent-event2")
  }

  // 一覧に表示させる処理
  emit("parent-event4")
}

const executeClose = () => {
  // 親側のメソッドを呼び出す。ここの引数でfalseを指定する場合は、親側の`shouldDialog`をfalseにする
  // `parent-event2`は、親側で子を呼び出す箇所で使用する`@parent-event2="closeDialog"`で 記述されている
  emit("parent-event")
}

// export default {
//   props: {
//     eventType: String,
//     isStack: Boolean,
//     isStackEdit: Boolean,
//     item: Object,
//     latestIncrementedId: Number,
//   },
//   data() {
//     return {
//       saveLabel: {
//         post: "登録",
//         put: "更新",
//       },
//     }
//   },

//   computed: {
//     isShowDetail() {
//       return false
//     },

//     getSaveLabel(): string {
//       if (this.isStackEdit) {
//         return this.saveLabel.put
//       } else {
//         return this.saveLabel.post
//       }
//     },

//     getInputObj(): Item | undefined {
//       if (!this.item || !this.latestIncrementedId) return
//       return {
//         id: this.latestIncrementedId,
//         name: this.item.name,
//         age: this.item.age,
//       }
//     }
//   },

//   methods: {
//     executeSave() {
//       // TODO localStorageに登録したい
//       if (!!this.item) {
//         // alert(this.latestIncrementedId)
//         if (!this.latestIncrementedId) return

//         // const inputObj: Item = {
//         //   id: this.latestIncrementedId,
//         //   name: this.item.name,
//         //   age: this.item.age,
//         // }

//         // 後で任意のものを削除できるように、incrementされるidの値も仕込みたい
//         // const setInputJson = JSON.stringify(inputObj)
//         const setInputJson = JSON.stringify(this.getInputObj)
//         localStorage.setItem(`key-${this.latestIncrementedId}`, setInputJson)

//         // Rootコンポーネントで定義している配列に、LSに保存する際のIDを追加するメソッドを発火
//         this.$emit("parent-event3", this.latestIncrementedId)

//       } else {
//         alert("必須項目を登録してください！")
//       }

//       let StoredItem: string | null = localStorage.getItem(`key-${this.latestIncrementedId}`)
//       if (StoredItem !== null) {
//         // JSON.parse(StoredItem).name
//         // alert(`ID：${JSON.parse(StoredItem).id}\n名前：${JSON.parse(StoredItem).name}\n年齢：${JSON.parse(StoredItem).age}`)
//       }

//       Object.keys(localStorage).forEach((key) => {
//         console.log(key)
//         alert(key)
//       })
      
//       // emitで親の`deleteConfirmDialog`を呼び出す
//       // alert(`${this.getSaveLabel}しました`)

//       // メッセージ表示後、ダイアログを閉じる
//       this.executeClose()

//       // スタック・フォームを閉じる処理
//       if (this.isStack) {
//         this.$emit("parent-event2")
//       }

//       // 一覧に表示させる処理
//       this.$emit("parent-event4")
//     },

//     executeClose() {
//       // 親側のメソッドを呼び出す。ここの引数でfalseを指定する場合は、親側の`this.shouldDialog`をfalseにする
//       // `parent-event2`は、親側で子を呼び出す箇所で使用する`@parent-event2="closeDialog"`で 記述されている
//       this.$emit("parent-event")
//     },
//   },
// }
</script>

<style lang="scss">

</style>
