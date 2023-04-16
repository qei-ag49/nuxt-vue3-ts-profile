<template>
  <div>
    <button @click="closeButton">mdi-close</button>
    <h2>title</h2>
  </div>

  <button 
    class="commonButton"
    v-if="isSaveButtonShown"
    @click="$emit('onSaveBtnClicked', $event)"
  >
    {{ saveBtnLabel }}
  </button>
</template>

<script>
export default {
  props: {
    title: String,
    saveBtnLabel: String,
    isSaveBtnShown: Boolean,
    disabled: Boolean,
  },
  data() {
    return {
      
    }
  },
  computed: {

  },
  methods: {
    closeButton() {
      // this.removeStack()
    },
    removeStack() {

    }
  },
}
</script>

<style lang="scss">
  
</style>