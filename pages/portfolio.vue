<template>
  <div>
    <div class="container">
      <h2>ポートフォリオ一覧です</h2>
      <ul class="d-flex card-list mt-4">
        <li v-for="(card, index) in cardList" :key="index" class="card card__col2">
          <div class="card-img">
            <img :src="`${card.imgSrc}`" class="card-img-top" alt="...">
          </div>
          <div class="card-content">
            <h3> {{ card.title }} </h3>
            <p>{{ card.text }}</p>
            <div class="d-flex">
              <div 
                v-for="(tag, index2) in card.tags" 
                :key="index2"
                class="card__tag"
              >
                {{ tag }}
              </div>
            </div>
            
            <button 
              class="btn commonButton mt-4"
              @click="openModal(card.id)"
            >
              詳細を見る
            </button>
          </div>

          <teleport to="body">

            <div class="modal-wrapper" v-if="showModal">
              <div class="modal-overlay" @click="closeModal"></div>
              <div class="modal-content">
                <h3>{{ selectedCard.title }}</h3>
                <p>{{ selectedCard.text }}</p>
                <!-- <div v-for="(tag, index) in selectedCard.tags" :key="index">
                  {{ tag }}
                </div> -->
                <button @click="closeModal">Close</button>
              </div>
            </div>

          </teleport>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { portfolios } from "~/constants/portfolios"

export default {
  data() {
    return {
      // eventName: "default",
      showModal: false,
      cardList: portfolios,
      cardId: 0,
      selectedCard: {},
    }
  },
  computed: {
  },
  methods: {
    openModal(id) {
      this.showModal = true
      this.cardId = id
      this.selectCard(id)
    },

    closeModal() {
      this.showModal = false
      this.cardId = 0
      this.selectedCard = {}
    },

    selectCard(cardId) {
      for (const card of this.cardList) {
        if (cardId === card.id) {
          this.selectedCard = card
          break
        }
      }
    },

  },
}
</script>

<style lang="scss">
  
</style>