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

<script lang="ts" setup>
import { defineProps } from "vue"

const props = defineProps({
  title: String,
  saveBtnLabel: String,
  isSaveBtnShown: Boolean,
  disabled: Boolean,
})

const closeButton = () => {
  removeStack()
}

const removeStack = () => {
  
}

const isSaveButtonShown = () => {

}
</script>

<style lang="scss">
  
</style>