<template>
  <div>
    <div class="overlay">

    </div>
    <div class="detailStack">
      <h2>詳細</h2>

      <div class="buttonWrapper">
        <button @click="closeStack" class="commonButton">
          閉じる
        </button>

        <button 
          v-if="isFormEdit" 
          @click="executeConfirmDialog('save')" 
          class="commonButton"
        >
          更新する
        </button>
        <button 
          v-else 
          @click="executeConfirmDialog('register')" 
          class="commonButton"
        >
          登録する
        </button>
      </div>

      <div v-if="isFormEdit">
        <p> {{ item.id }} </p>
        <p> {{ item }} </p>
      </div>

      <form class="mt-4" action="">
        <div>
          名前：
          <input type="text" v-model="item.name">
        </div>
        <div class="mt-4">
          年齢：
          <input type="text" v-model="item.age">
        </div>
        <div v-if="isFormEdit" class="mt-4">
          プロフィール画像
          <div class="imgWrapper">
            <img :src="`${item.imgSrc}`" alt="">
          </div>
        </div>

      </form>

      <div v-if="isFormEdit" class="buttonWrapper mt-4">
        <button 
          class="commonButton mr-2"
          @click="executeConfirmDialog('delete')"
        >削除する</button>
      </div>

      <teleport to="body">
        <div v-if="getShouldDialog" class="modal boxShadow">
          <div>
            <p>モーダルウィンドウ・ダイアログ</p>

            <!-- 子コンポーネントに、親コンポーネントのメソッド`confirmDialog`を使わせてあげる -->
            <StringCheckDialog 
              v-if="eventType === 'delete'"
              :event-type="eventType"
              :is-stack="true"
              @parent-event="closeDialog"
              @parent-event2="closeStack"
            />

            <NormalDialog 
              ref="normalDialog" 
              v-if="eventType === 'save'"
              :event-type="eventType"
              :is-stack-edit="isStackEdit"
              :is-stack="true"
              :item="item"
              :latestIncrementedId="latestIncrementedId"
              @parent-event="closeDialog"
              @parent-event2="closeStack"
              @parent-event3="executePushLsKey"
              @parent-event4="generateItemFromLs"
            />
          </div>
        </div>
      </teleport>
    </div>
  </div>
</template>

<script>
// import { Item } from "~~/types/common"

export default {
  props: {
    isFormEdit: Boolean,
    item: Object,
    latestIncrementedId: Number,
  },
  data() {
    return {
      dataOptionData: "",
      shouldDialog: false,
      eventName: "default",
      eventType: "",
    }
  },
  computed: {
    getShouldDialog() {
      return this.shouldDialog
    },

    isStackEdit() {
      return this.isFormEdit
    },

    getInputObj() {
      if (!this.item || !this.latestIncrementedId) return
      return {
        id: this.latestIncrementedId,
        name: this.item.name,
        age: this.item.age,
      }
    }

  },
  // mounted() {
  // },
  watch: {
    itemId: function(newVal, oldVal) {
      // データの値が変化した時にコンソールに新しい値と古い値を出力
      this.dataOptionData = newVal
    },
  },
  methods: {
    executeIsFormEditFalse() {
      this.$emit("parent-event", false)
    },

    confirmDialog() {
      this.shouldDialog = true
    },

    closeDialog() {
      this.shouldDialog = false
    },

    closeStack() {
      this.$emit("parent-event2", false)
    },

    executeConfirmDialog(eventType) {
      // deleteなどの文字列をセットする処理を入れる
      this.eventType = eventType

      if (eventType === 'register') {
        console.log("register")

        if (!this.latestIncrementedId) return

        // const inputObj: Item = {
        //   id: this.latestIncrementedId,
        //   name: this.item.name,
        //   age: this.item.age,
        // }

        // 後で任意のものを削除できるように、incrementされるidの値も仕込みたい
        const setInputJson = JSON.stringify(this.getInputObj)
        localStorage.setItem(`key-${this.latestIncrementedId}`, setInputJson)

        // Rootコンポーネントで定義している配列に、LSに保存する際のIDを追加するメソッドを発火
        this.$emit("parent-event3", this.latestIncrementedId)

        this.executePushLsKey()

      } else {
        // alert("必須項目を登録してください！")

        // this.confirmDialog()
        this.$refs.confirmDialog.confirmDialog(true)
      }

      let StoredItem = localStorage.getItem(`key-${this.latestIncrementedId}`)
      if (StoredItem !== null) {
        // JSON.parse(StoredItem).name
        // alert(`ID：${JSON.parse(StoredItem).id}\n名前：${JSON.parse(StoredItem).name}\n年齢：${JSON.parse(StoredItem).age}`)
      }

      Object.keys(localStorage).forEach((key) => {
        console.log(key)
        alert(key)
      })

      // メッセージ表示後、ダイアログを閉じる
      this.closeDialog()
      // スタック・フォームを閉じる処理
      this.closeStack()
      // LSの内容を反映させる
      this.generateItemFromLs()
    },

    // ローカルストレージに存在するキーを配列に追加する。
    executePushLsKey() {
      const latestIncrementedId = this.$refs.normalDialog.latestIncrementedId
      this.$emit("parent-event3", latestIncrementedId)
    },

    generateItemFromLs() {
      this.$emit("parent-event4")
    },
  }
}
</script>

<style lang="scss">
.detailStack {
  position: absolute;
  top: 0;
  right: 0;

  width: 70%;
  background-color: #fff;
  // opacity: 0.95;
  z-index: 2;
  height: 100vh;
  padding: 1rem;
  border-left: 1px solid #000;

  min-height: calc(90vh + 160px);

  .imgWrapper {
    width: 50%;
  }
}
</style>