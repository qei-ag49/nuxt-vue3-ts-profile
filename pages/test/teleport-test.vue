<template>
  <div>
    <h2>Teleportを使用したダイアログ・モーダル機能</h2>
    <p>削除するボタンをクリックすると確認ダイアログを表示されます</p>
    <div class="buttonWrapper">
      <button 
        class="commonButton mr-2"
        @click="executeConfirmDialog('delete')"
      >削除する</button>
    </div>
    <ConfirmDialog :event-type-root="eventName" ref="child" />
  </div>
</template>  

<script>
export default {
  data() {
    return {
      eventName: "default",
    }
  },
  methods: {
    executeConfirmDialog(eventName) {
      // deleteなどの文字列をセットする処理を入れる
      this.eventName = eventName

      /**
       * `this.$ref.XXX.YYY`は子コンポーネントのデータを利用する時に使用します
       * 子コンポーネントを呼び出す箇所に「ref="child"」と記載します
       */
      if (eventName === "delete") {
        this.$refs.child.deleteConfirmDialog()

      } else if (eventName === "showDetail") {
        // もしexecuteConfirmDialogの引数に渡されたイベント名が"showDetail"だったら〜の処理の場合です
      }
    },
  },
}
</script>
