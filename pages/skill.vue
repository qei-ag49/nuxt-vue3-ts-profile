<script lang="ts" setup>
import { skills } from "~/constants/skills"
import { ref, reactive } from "vue"
import { SkillCard } from "~/types/common"
import { EXPERIENCE } from "~/constants/experience"

//
// data
//
const showModal = ref<boolean>(false)
const cardList = reactive<SkillCard[]>(skills)
const cardId = ref<number>(0)
const selectedCard = reactive<Pick<SkillCard, "title" | "text" | "detailText" | "imgSrc">>({
  title: "",
  text: "",
  detailText: "",
  imgSrc: "",
})

const experiences = EXPERIENCE

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
  selectedCard.detailText = ""
  selectedCard.imgSrc = ""
}

/** ユーザーのカード選択時 */
const selectCard = (cardId: number) => {
  for (const card of cardList) {
    if (cardId === card.id) {
      Object.assign(selectedCard, card)
      break
    }
  }
}

</script>

<template>
  <div>
    <div class="container">
      <h2>skill</h2>
    </div>

    <div class="container mt-4">
      <h3>経験業務</h3>

      <ul class="statementList flex">
        <li class="statement mt-4" v-for="(experience, index) in experiences" :key="index">
          <h4 class="heading-sub">{{ experience.title }}</h4>
          <p class="pl-4 text-indent">
            {{ experience.text }}
          </p>
        </li>
      </ul>
    </div>

    <hr />

    <div class="container mt-4">
      <h3>経験技術</h3>
      <p>※カードをクリックすると詳細が確認できます</p>
    </div>

    <div class="container mt-4">
      <ul class="d-flex card-list">
        <li v-for="(card, index) in cardList" :key="index" class="card card__col3" @click="openModal(card.id)">
          <div class="card-img">
            <img :src="`${card.imgSrc}`" class="card-img-top" alt="...">
          </div>
          <div class="card-content">
            <h3> {{ card.title }} </h3>

            <div class="percentage-bar">
              <div 
                class="fill"
                :class='`fill__${card.percentage}`'
              ></div>
              <p> {{ card.percentage }}% </p>
            </div>

            <p>経験年数：{{ card.periodOfExperience }}</p>
            <!-- <div class="buttonWrapper">
              <button 
                class="btn commonButton" 
                @click="openModal(card.id)"
              >
                詳細を見る
              </button>
            </div> -->
          </div>

          <MoleculesModalSkillModal :show-modal="showModal" :card="selectedCard" @close="closeModal" />
        </li>
      </ul>
    </div>

    <hr />

    <div class="container mt-4">
      <h3>所有資格</h3>

      <ul class="statementList flex">
        <li class="statement mt-4">
          <h4 class="heading-sub">
            Java Silver
          </h4>
          <p class="pl-4 text-indent">
            2022年1月取得
          </p>
          <p class="pl-4 text-indent">
            Javaが未経験の中の業務だったため、キャッチアップのために学習し取得しました。
          </p>
        </li>

        <li class="statement mt-4">
          <h4 class="heading-sub">
            AWS Certified Solutions Architect - Associate
          </h4>
          <p class="pl-4 text-indent">
            2022年10月取得
          </p>
          <p class="pl-4 text-indent">
            AWSの認定資格の中で、スタンダードな資格ということもあり、学習し取得しました。
          </p>
        </li>
      </ul>

      <!-- <div class="heading-sub mt-4">Java Silver</div>
      <div class="pl-4 text-indent">2022年1月取得</div>
      <div class="pl-4 text-indent">
        Javaが未経験の中の業務だったため、キャッチアップのために学習し取得しました。
      </div>
      <div class="heading-sub mt-4">AWS Certified Solutions Architect - Associate</div>
      <div class="pl-4 text-indent">2022年10月取得</div>
      <div class="pl-4 text-indent">
        AWSの認定資格の中で、スタンダードな資格ということもあり、学習し取得しました。
      </div> -->
    </div>
  </div>
</template>

<style lang="scss">
.heading-sub {
  // border-left: 3px solid #1abc9c;
  border-left: 3px solid #17a2b8;
  padding-left: 10px;
  font-size: 1.2rem;
  font-weight: bold;
}

.pl-4 {
  padding-left: 13px;
}

.text-indent {
  text-indent: 0px;
}

</style>
