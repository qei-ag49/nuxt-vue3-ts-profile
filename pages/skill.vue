<script lang="ts" setup>
import { skills } from "~/constants/skills"
import { ref, reactive } from "vue"
import { SkillCard } from "~/types/common"

//
// data
//
const showModal = ref<boolean>(false)
const cardList = reactive<SkillCard[]>(skills)
const cardId = ref<number>(0)
// NOTE Pick<aaa, "" | "">で型指定したい
const selectedCard = reactive<Pick<SkillCard, "title" | "text" | "detailText" | "imgSrc">>({
  title: "",
  text: "",
  detailText: "",
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

      <div class="heading-sub mt-4">概要：</div>
      <div class="pl-4 text-indent">業務アプリケーションのSaasサービスの開発・運用対応をしていました。</div>

      <div class="heading-sub mt-4">自身の対応範囲：</div>
      <div class="pl-4 text-indent">
        一般開発メンバーとして、チケットの内容に添い、フロント・バックエンドの修正をメインで行いました。<br>ローテーションで、週1回のリリースやコードレビューもしていました。
      </div>

      <div class="heading-sub mt-4">チーム体制：</div>
      <div class="pl-4 text-indent">
        チーム体制はエンジニア約4人で、Backlogを使用したチケット駆動開発で、一部スクラム体制で進めていました。
        メンバー全員でローテーションで週1回のリリース対応、また都度他社のPRのコードレビューを行っていました。
      </div>

      <div class="heading-sub mt-4">仕様決めから実装の流れ：</div>
      <div class="pl-4 text-indent">
        社内の営業・CS（カスタマーサクセス）メンバーから、お客様の要望を確認し要件や優先順位、仕様などを確認し実装に入る流れです。
      </div>

      <div class="heading-sub mt-4">実装・コーディング</div>
      <div class="pl-4 text-indent">
        API通信が走る機会は必要最低限か、固定の文字列を使用する場合は定数化する、操作パターンが網羅できているか、などを意識しながら対応しています。
      </div>

      <div class="heading-sub mt-4">レビュー・リリース体制：</div>
      <div class="pl-4 text-indent">
        原則週1回のリリースをしていました。
        AWS Codeシリーズを利用したCI / CDを利用していました。
        全員のレビューが通過したらチケットのブランチ内容をdevelopブランチにマージ、ステージングブランチにマージ、本番用のブランチにマージという流れでした。
      </div>
    </div>

    <hr />

    <div class="container mt-4">
      <h3>経験技術</h3>
    </div>

    <div class="container mt-4">
      <ul class="d-flex card-list">
        <li v-for="(card, index) in cardList" :key="index" class="card card__col3">
          <div class="card-img">
            <img :src="`${card.imgSrc}`" class="card-img-top" alt="...">
          </div>
          <div class="card-content">
            <h3> {{ card.title }} </h3>
            <p>経験年数：{{ card.periodOfExperience }}</p>
            <p>{{ card.text }}</p>
            <div class="buttonWrapper">
              <button 
              class="btn commonButton" 
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
                <p>{{ selectedCard.text }}</p>
                <p>{{ selectedCard.detailText }}</p>
                <div style="max-width: 200px; margin: 0 auto;">
                  <img :src="selectedCard.imgSrc" alt="">
                </div>
                <div class="buttonWrapper mt-4">
                  <button class="commonButton"  @click="closeModal">閉じる</button>
                </div>
              </div>
            </div>

          </teleport>
        </li>
      </ul>
    </div>

    <hr />

    <div class="container mt-4">
      <h3>所有資格</h3>

      <div class="heading-sub mt-4">Java Silver</div>
      <div class="pl-4 text-indent">2022年1月取得</div>
      <div class="pl-4 text-indent">
        Javaが未経験の中の業務だったため、キャッチアップのために学習し取得しました。
      </div>
      <div class="heading-sub mt-4">AWS Certified Solutions Architect - Associate</div>
      <div class="pl-4 text-indent">2022年10月取得</div>
      <div class="pl-4 text-indent">
        AWSの認定資格の中で、スタンダードな資格ということもあり、学習し取得しました。
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.heading-sub {
  border-left: 3px solid #1abc9c;
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
