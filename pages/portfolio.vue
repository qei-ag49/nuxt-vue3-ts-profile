<script lang="ts" setup>
import { portfolios } from "~/constants/portfolios"
import { ref, reactive } from "vue"
import { Portfolio } from "~/types/common"

//
// data
//
const showModal = ref<boolean>(false)
const cardList = reactive<Portfolio[]>(portfolios)
const cardId = ref<number>(0)
const selectedCard = reactive<Pick<Portfolio, "title" | "text" | "imgSrc">>({
  title: "",
  text: "",
  imgSrc: "",
})

//
// methods
//
/** モーダルを開く場合 */
const openModal = (id: number) => {
  showModal.value = true
  cardId.value = id
  selectCard(id)
}

/** モーダルを閉じる場合 */
const closeModal = () => {
  showModal.value = false
  cardId.value = 0
  selectedCard.title = ""
  selectedCard.text = ""
}

/** ユーザーのカード選択時 */
const selectCard = (id: number) => {
  for (const card of cardList) {
    if (id === card.id) {
      Object.assign(selectedCard, card)

      // 1つfindできればその場で処理を終了
      break
    }
  }
}
</script>

<template>
  <div>
    <div class="container">
      <h2>Portfolio</h2>
    </div>
  
    <div class="container mt-4">
      <ul class="d-flex card-list mt-4">
        <li v-for="(card, index) in cardList" :key="index" class="card card__col2">
          <div class="card-img">
            <img :src="`${card.imgSrc}`" class="card-img-top" alt="...">
          </div>

          <div class="card-content">
            <h3> {{ card.title }} </h3>
            <p class="cardText">{{ card.text }}</p>
            <p>デプロイ先：{{ card.deployedTo }}</p>
            <p>
              github：<a :href="card.githubSrc" target="_blank" rel="noopener">リンク</a>
            </p>
            <div class="d-flex card_tags_box mt-4">
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

          <!-- <teleport to="body">
            <div class="modal-wrapper" v-if="showModal">
              <div class="modal-overlay" @click="closeModal"></div>
              <div class="modal-content">
                <h3>{{ selectedCard.title }}</h3>
                <p class="cardText">{{ selectedCard.text }}</p>
                <div class="buttonWrapper">
                  <button class="commonButton" @click="closeModal">Close</button>
                </div>
              </div>
            </div>
          </teleport> -->

          <MoleculesModalSkillModal :show-modal="showModal" :card="selectedCard" @close="closeModal" />

        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.cardText {
  min-height: 4rem;
}
</style>
