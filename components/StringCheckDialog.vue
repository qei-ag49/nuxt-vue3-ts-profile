<template>
  <transition name="fade">
    <div>
      <h2 v-if="isDelete">本当に削除しますか？</h2>
      <p>削除する場合は、「{{ baseString }}」の文字列を入れてください</p>
      <input type="text" v-model="dataSample">
      
      <div class="mt-4 flex buttonWrapper">
        <button @click="executeClose" class="commonButton">キャンセル</button>
        <button 
          class="commonButton"
          v-if="isDelete"
          :disabled="checkIsMatchBothStrings"
          @click="executeDelete"
        >
          {{ buttonLabel }}
        </button>
      </div>

    </div>
  </transition>
</template>

<script lang="ts" setup>
import { computed } from "vue"

const props = defineProps({
  eventType: String,
  isStack: Boolean,
})

const emit = defineEmits([
  "parent-event",
  "parent-event2",
])

const baseString = ref<string>("削除")
const dataSample = ref<string>("")
// const disabledFlag = ref(true)

const checkIsMatchBothStrings = computed<boolean>(() => {
  // 文字列が一致した時のみ閉じる仕様です
  if (baseString === dataSample) {
    return false
  }
  return true
})

const isDelete = computed<boolean>(() => {
  if (props.eventType === "delete") {
    return true
  }
  return false
})

// const isShowDetail = computed(() => {
//   return false
// })

const buttonLabel = computed<string>(() => {
  if (props.eventType === "delete") {
    return "削除"
  } else if (props.eventType === "showDetail") {
    return "詳細確認"
  }
  return ""
})

const executeDelete = () => {
  alert("削除しました")

  // 「削除しました」のメッセージ表示後、ダイアログを閉じる
  executeClose()

  // スタック・フォームを閉じる処理
  if (props.isStack) {
    // ifで条件を限定して分岐処理する
    emit("parent-event2")
  }
}
    
const executeClose = () => {
  // 親側のメソッドを呼び出す。ここの引数でfalseを指定する場合は、親側の`shouldDialog`をfalseにする
  // `parent-event2`は、親側で子を呼び出す箇所で使用する`@parent-event2="closeDialog"`で 記述されている
  emit("parent-event", false)
}

// export default {
//   props: {
//     eventType: String,
//     isStack: Boolean,
//   },
//   data() {
//     return {
//       baseString: "削除",
//       dataSample: "",
//       disabledFlag: true,
//     }
//   },

//   computed: {
//     checkIsMatchBothStrings() {
//       // 文字列が一致した時のみ閉じる仕様です
//       if (this.baseString === this.dataSample) {
//         return false
//       }
//       return true
//     },

//     isDelete() {
//       if (this.eventType === "delete") {
//         return true
//       }
//       return false
//     },

//     isShowDetail() {
//       return false
//     },

//     buttonLabel() {
//       if (this.eventType === "delete") {
//         return "削除"
//       } else if (this.eventType === "showDetail") {
//         return "詳細確認"
//       }
//     }
//   },

//   methods: {
//     executeDelete() {
//       alert("削除しました")

//       // 「削除しました」のメッセージ表示後、ダイアログを閉じる
//       this.executeClose()

//       // スタック・フォームを閉じる処理
//       if (this.isStack) {
//         // ifで条件を限定して分岐処理する
//         this.$emit("parent-event2")
//       }
//     },
//     executeClose() {
//       // 親側のメソッドを呼び出す。ここの引数でfalseを指定する場合は、親側の`this.shouldDialog`をfalseにする
//       // `parent-event2`は、親側で子を呼び出す箇所で使用する`@parent-event2="closeDialog"`で 記述されている
//       this.$emit("parent-event", false)
//     },
//   },
// }
</script>

<style lang="scss">

</style>
