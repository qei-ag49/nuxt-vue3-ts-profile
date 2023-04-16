<template>
  <div>
    <div class="container">
      <h2>skills</h2>
    </div>

    <div class="container mt-4">
      <h3>経験業務</h3>
    </div>

    <div class="container">
      <p>
        <span class="font-bold">概要：</span><br>
        業務アプリケーションのマイクロサービスの開発・運用の対応をしていました。
      </p>
      <p>
        <span class="font-bold">チーム体制：</span><br>
        チーム体制はエンジニア約4人で、Backlogを使用したチケット駆動開発で、スクラム体制で進めていました。
        メンバー全員でローテーションで原則週1回のリリース、コードレビューを行っていました。
      </p>

      <p>
        <span class="font-bold">仕様決めから実装の流れ：</span><br>
        社内の営業・CS（カスタマーサクセス）メンバーから、お客様の要望を確認し、要件や優先順位、仕様などを確認、その後実装に入る流れです。
      </p>

      <p>
        <span class="font-bold">レビュー・リリース体制：</span><br>
        原則週1回のリリースをしていました。<br>
        AWS Codeシリーズを利用したCI / CDを利用していました。<br>
        全員のレビューが通過したらチケットのブランチ内容をdevelopブランチにマージ、ステージングブランチにマージ、本番用のブランチにマージという流れでした。
      </p>

      <p>
        <span class="font-bold">自身の対応範囲：</span><br>
        一般開発メンバーとして、チケットの内容に添い、フロント・バックエンドの修正をメインで行いました。
        ローテーションで、週1回のリリースやコードレビューもしていました。
      </p>
    </div>

    <div class="container mt-4">
      <h3>経験技術</h3>
    </div>

    <div class="container">
      <ul class="d-flex card-list">
        <li v-for="(card, index) in cardList" :key="index" class="card card__col3">
          <div class="card-img">
            <img :src="`${card.imgSrc}`" class="card-img-top" alt="...">
          </div>
          <div class="card-content">
            <h3> {{ card.title }} </h3>
            <p>経験年数：{{ card.periodOfExperience }}</p>
            <p>{{ card.text }}</p>
            <button 
              class="btn commonButton" 
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
                <button class="commonButton"  @click="closeModal">閉じる</button>
              </div>
            </div>

          </teleport>
        </li>
      </ul>
    </div>

    <Modal 
      v-if="showModal1"
      @close="closeModal"
    />

    

  </div>
</template>

<script>
import {skills} from "~/constants/skills"

export default {
  data() {
    return {
      // eventName: "default",
      showModal: false,
      // cardList: [
      //   {
      //     id: 1,
      //     imgSrc: "https://via.placeholder.com/500x400.png?text=Card+1",
      //     title: "HTML / CSS",
      //     text: "経験",
      //   },
      //   {
      //     id: 2,
      //     imgSrc: "https://via.placeholder.com/500x400.png?text=Card+1",
      //     title: "Vue / Nuxt",
      //     text: "経験",
      //   },
      //   {
      //     id: 3,
      //     imgSrc: "https://via.placeholder.com/500x400.png?text=Card+1",
      //     title: "JavaScript",
      //     text: "経験",
      //   },
      //   {
      //     id: 4,
      //     imgSrc: "https://via.placeholder.com/500x400.png?text=Card+1",
      //     title: "TypeScript",
      //     text: "経験",
      //   },
      // ],
      cardList: skills,
      cardId: 0,
      selectedCard: {},
    }
  },
  computed: {
  },
  methods: {
    // openModal(eventName) {
    //   this.eventName = eventName

    //   if (eventName === "delete") {
    //     this.$refs.child.deleteConfirmDialog()

    //   } else if (eventName === "showDetail") {
    //     // もしexecuteConfirmDialogの引数に渡されたイベント名が"showDetail"だったら〜の処理の場合です
    //   }
    // },

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