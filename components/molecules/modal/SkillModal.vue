
<script lang="ts" setup>
import { SkillCard } from '~/types/common';

const props = defineProps({
  showModal: Boolean,
  card: Object as () => Pick<SkillCard, "title" | "text" | "detailText" | "imgSrc"> | undefined
})

const emitClose = defineEmits(['close'])

const closeModal = () => {
  emitClose('close')
}
</script>

<template>
  <teleport to="body">
    <div class="modal-wrapper" v-if="showModal">
      <div class="modal-overlay" @click="closeModal"></div>
      <div class="modal-content">
        <h3>{{ card?.title }}</h3>
        <p>{{ card?.text }}</p>
        <p>{{ card?.detailText }}</p>
        <div style="max-width: 200px; margin: 0 auto;">
          <img :src="card?.imgSrc" alt="">
        </div>
        <div class="buttonWrapper mt-4">
          <button class="commonButton" @click="closeModal">閉じる</button>
        </div>
      </div>
    </div>
  </teleport>
</template>
