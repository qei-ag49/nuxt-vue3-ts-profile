<script lang="ts" setup>
/** 親のメソッド実行のテスト */
const parentMethod = (e: any) => {
  console.log("Emit実行されました", e)
}
</script>

<template>
  <div>
    <div class="container">
      <h2>About Me</h2>
    </div>

    <!-- <TestCompositionTest /> -->
    <!-- <TestScriptSetupTest 
      title="ここにタイトルが入ります"
      @custom-event="parentMethod"  
    /> -->

    <div class="container mt-4">
      <div class="flex box">
        <div class="box__left">
          <div>
            <h3>あいさつ</h3>
            <p>ご訪問いただきありがとうございます！</p>
          </div>
          
          <div class="mt-4">
            <h3>自己紹介</h3>
            <p>
              自社Saas開発企業の開発・運用エンジニアとして従事しています。
              <br />
              2019年12月〜未経験からWEB制作会社に入社し約1.5年勤務
              <br />
              2021年10月〜現在、WEBエンジニアとして働いています。
            </p>
          </div>
          
        </div>
        <div class="box__right">
          <div class="imageWrapper">
            <img src="https://camo.qiitausercontent.com/20fb3c52a7e918708740d4294584298ddce6d50e/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f3836373737352f65366438356663312d376166392d663430392d626561352d6637323939343035303831302e706e67" alt="">
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-4">
      <h3>興味・関心ごと</h3>
        <ul class="interestingList">
          <li>ChatGPT</li>
          <li>カフェ巡り</li>
          <li>サウナ・SPA</li>
          <li>カラオケ</li>
          <li>アロマ</li>
          <li>音楽（Chill-Hop / Lo-fi）</li>
          <li>漫画</li>
          <li>サッカー観戦</li>
          <li>日本史・世界史</li>
        </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.interestingList {
  li {
    &::before {
      content: "・";
    }
  }
}
</style>