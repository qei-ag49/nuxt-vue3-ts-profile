<template>
  <div class="relative">
    <teleport to="body">
      <div v-if="getShouldDialog" class="modal">
        <div>
          <p>モーダルウィンドウ・ダイアログ</p>
          <p>ここはTeleportTestでのみ使用しています</p>

          <!-- 子コンポーネントに、親コンポーネントのメソッド`deleteConfirmDialog`, `closeDialog`を使わせてあげる -->
          <StringCheckDialog 
            :event-type="eventType" 
            @parent-event="closeDialog"
          />
        </div>
      </div>
    </teleport>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    // 親側の`:event-type-root="eventName"`の記載で、個々のeventTypeRootにeventNameの値が渡ってくる
    eventTypeRoot: String,
  },
  data() {
    return {
      shouldDialog: false,
      eventType: this.eventTypeRoot,
    }
  },
  computed: {
    getShouldDialog() {
      return this.shouldDialog
    },
  },

  // データやcomputedの変更を監視するオプション
  watch: {
    eventTypeRoot: function(newVal, oldVal) {
      // 親から渡されたpropsの`eventTypeRoot`の値が変化した時にコンソールに新しい値と古い値を出力
      this.eventType = newVal
    }
  },
  methods: {
    deleteConfirmDialog() {
      // 親側のメソッドで`this.$refs.child.deleteConfirmDialog()`が実行された時、子側のdataの`shouldDialog`をtrueにする（その後、computedの`getShouldDialog`でtemplate側で再度読み込ませる）
      this.shouldDialog = true
    },

    closeDialog() {
      // 子側のexecuteCloseの`this.$emit("parent-event2", false)`で呼んだときに、子側の`executeClose()`からこのメソッドが実行される
      this.shouldDialog = false
    }
  },
}
</script>

<style lang="scss" scoped>
.relative {
  position: relative;
}
.modal {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
