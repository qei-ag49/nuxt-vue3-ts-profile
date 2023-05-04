<template>
  <div>
    <div class="container">
      <h2>Portfolio</h2>
    </div>
    <div class="container">
      <ul class="d-flex card-list mt-4">
        <li v-for="(card, index) in cardList" :key="index" class="card card__col2">
          <div class="card-img">
            <img :src="`${card.imgSrc}`" class="card-img-top" alt="...">
          </div>
          <div class="card-content">
            <h3> {{ card.title }} </h3>
            <p class="cardText">{{ card.text }}</p>
            <div class="d-flex">
              <div 
                v-for="(tag, index2) in card.tags" 
                :key="index2"
                class="card__tag"
              >
                {{ tag }}
              </div>
            </div>

            <div class="buttonWrapper">
              <button 
              class="btn commonButton mt-4"
              @click="openModal(card.id)"
            >
              詳細を見る
            </button>
            </div>
          </div>

          <teleport to="body">

            <div class="modal-wrapper" v-if="showModal">
              <div class="modal-overlay" @click="closeModal"></div>
              <div class="modal-content">
                <h3>{{ selectedCard.title }}</h3>
                <p class="cardText">{{ selectedCard.text }}</p>
                <!-- <div v-for="(tag, index) in selectedCard.tags" :key="index">
                  {{ tag }}
                </div> -->
                <div class="buttonWrapper">
                  <button class="commonButton" @click="closeModal">Close</button>
                </div>
              </div>
            </div>

          </teleport>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { portfolios } from "~/constants/portfolios"
import { ref, reactive } from "vue"

//
// data
//
const showModal = ref<boolean>(false)
const cardList = reactive(portfolios)
const cardId = ref<number>(0)
const selectedCard = reactive({
  title: "",
  text: "",
})

//
// methods
//
const openModal = (id: number) => {
  showModal.value = true
  cardId.value = id
  selectCard(id)
}

const closeModal = () => {
  showModal.value = false
  cardId.value = 0
  selectedCard.title = ""
  selectedCard.text = ""
}

const selectCard = (id: number) => {
  for (const card of cardList) {
    // if (cardId.value === card.id) {
    if (id === card.id) {
      // NOTE 引数のidを参照していないからNGかも
      Object.assign(selectedCard, card)

      break
    }
  }
}

</script>

<style lang="scss">
.cardText {
  min-height: 4rem;
}
</style>