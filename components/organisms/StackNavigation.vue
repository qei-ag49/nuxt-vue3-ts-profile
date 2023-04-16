<template>
  <div>
    <transition name="fade">
      <div v-if="isLoaded" :class="style.overlay"></div>
    </transition>

    <transition name="right">
      <div v-if="isLoaded" :class="style.content" :width="widthPercentage">
        <component :is="component" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    component: String,
    index: Number,
    width: String,
  },
  data() {
    return {
      isLoaded: false,
    }
  },

  computed: {
    isTopPage() {
      return (this.index || 0) + 1 === ""
    },

    style() {
      return {
        overlay: this.isTopPage ? "c-stack-navigation__overlay" : "c-stack-navigation__overlay__back",
        content: this.isTopPage ? "c-stack-navigation__content" : "c-stack-navigation__content__back",
      }
    },

    widthPercentage() {
      return "100%"
    },

  },
  mounted() {
    this.isLoaded = true
  },
}
</script>

<style lang="scss">
.c-stack-navigation {
  &__content {
    @include stack;
    z-index: 200;
    &__back {
      @include stack;
    }
    background: blue !important;
  }
  &__overlay {
    @include overlay;
    z-index: 199;
    &__back {
      @include overlay;
    }
  }
}
</style>