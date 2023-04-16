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

<script lang="ts">
import { portfolios } from "~/constants/portfolios"

export default {
  data() {
    return {
      // eventName: "default",
      showModal: false,
      cardList: portfolios,
      cardId: 0,
      selectedCard: {
        title: "",
        text: "",
      },
    }
  },
  computed: {
  },
  methods: {
    openModal(id: number) {
      this.showModal = true
      this.cardId = id
      this.selectCard(id)
    },

    closeModal() {
      this.showModal = false
      this.cardId = 0
      this.selectedCard = {
        title: "",
        text: "",
      }
    },

    selectCard(cardId: number) {
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
.cardText {
  min-height: 4rem;
}
</style>