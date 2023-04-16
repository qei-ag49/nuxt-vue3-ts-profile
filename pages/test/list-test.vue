<template>
  <div id="listTest">
    
    <div class="buttonWrapper">
      <button 
        @click="openStack(0)"
        class="commonButton"
      >
        新規登録
      </button>

      <button 
        @click="confirmKeyArr"
        class="commonButton"
      >
        confirmKeyArr
      </button>

      <button 
        @click="generateItemFromLs"
        class="commonButton"
      >
        generateItemFromLs
      </button>

      <button 
        @click="clearLocalStorage"
        class="commonButton"
      >
        clearLocalStorage
      </button>

    </div>
    <ul class="flex mt-4">
      <li v-for="(item, index) in items" :key="index" class="card">
        <div class="card-top">
          <div class="imgWrapper">
            <img :src="`${item.imgSrc}`" alt="">
          </div>
        </div>
        <div class="card-bottom">
          {{ item.name }}
          {{ item.age }}

          <button 
            @click="openStack(item.id)" 
            class="commonButton"
          >
            詳細を見る
          </button>
        </div>
      </li>
    </ul>

    <ul class="flex mt-4">
      <li v-for="(list, index) in getListArr" :key="index" class="card">
        <!-- <div class="card-top">
          <img :src="`${list.imgSrc}`" alt="">
        </div> -->
        <div class="card-bottom">
          {{ list.name }}
        </div>
      </li>
    </ul>

    <DetailStack
      :is-form-edit="isFormEdit"
      :item="item"
      :latestIncrementedId="latestIncrementedId"
      @parent-event="setIsFormEdit"
      @parent-event2="setIsShowStack"
      @parent-event3="pushLsKey"
      @parent-event4="generateItemFromLs"
      :class="giveClassNameIsShow"
      ref="child"
    />
  </div>
</template>

<script lang="ts">
import items from "@/assets/json/items.json"
import { Item } from "~~/types/common"

export default {
  data() {
    return {
      // items: [
      //   {
      //     "id": 1,
      //     "name": "aaa",
      //     "age": 12,
      //   },
      //   {
      //     "id": 2,
      //     "name": "bbb",
      //     "age": 22,
      //   },
      //   {
      //     "id": 3,
      //     "name": "bbb",
      //     "age": 32,
      //   },
      // ],
      items: items,
      isShow: false,
      itemId: 0,
      isFormEdit: false,
      item: {
        id: 0,
        name: "田中",
        age: 10,
        imgSrc: "",
      },
      latestIncrementedId: 0,
      lsKeyArr: [0],
      listArr: [null],
      localStorageItems: null
    }
  },
  computed: {
    giveClassNameIsShow() {
      if (!this.isShow) {  
        return "displayNone"
      }
      return ""
    },

    getItem(): Item {
      return this.item
    },

    getListArr(): Item[] {
      if (this.listArr) return []
      return this.listArr
    }

  },
  mounted() {
  },
  methods: {
    openStack(itemId: number | undefined) {
      if (itemId !== 0 && !itemId) return

      this.latestIncrementedId++

      window.scroll({ top: 0, behavior: 'smooth' })
      // this.$nextTick(() => {
      //   const destinationDom = this.$refs.child as HTMLElement
      //   destinationDom.scrollIntoView({ behavior: "smooth" })
      // })

      if (itemId !== 0) {
        this.isFormEdit = true

      } else {
        itemId = 0
        this.isFormEdit = false
      }

      // itemIdから、IDが一致するオブジェクトを探す
      for (let item of this.items) {
        if (item.id === itemId) {
          // itemを子要素に渡す
          this.item = item

          // 一致した要素が見つかったら、その時点で処理終了
          break
        }
      }

      this.isShow = true
      this.itemId = itemId
    },

    /** TOOD 孫からも呼べるようにしたい */
    closeStack() {
      this.isShow = false
    },

    setIsShowStack(flag: boolean) {
      this.isShow = flag
    },

    setIsFormEdit(flag: boolean) {
      this.isFormEdit = flag
    },

    // ローカルストレージに存在するキーを配列に追加する。
    // データの一覧表示の際に利用する
    pushLsKey(key: number) {
      this.lsKeyArr.push(key)
      if (this.lsKeyArr[0] === 0) {
        this.lsKeyArr.shift()
      }
    },

    // 一覧表示するListを生成
    // 配列のIDと一致するLSのデータを生成し、v-forで表示させたい
    generateItemFromLs() {
      for (let i = 0; i < this.lsKeyArr.length; i++) {
        let StoredItem: string | null = localStorage.getItem(`key-${this.lsKeyArr[i]}`)

        if (StoredItem === null) return
        if (this.lsKeyArr[i] ===  JSON.parse(StoredItem).id) {
          this.listArr.push(JSON.parse(StoredItem))
          if (this.listArr[0] === null) {
            this.listArr.shift()
          }
        }
      }

      console.log(this.listArr)
    },

    confirmKeyArr() {
      console.log(this.lsKeyArr)
      alert(this.lsKeyArr)
    },

    /** 初期化 */
    clearLocalStorage() {
      localStorage.clear()
      alert("Clearしました")
    }
  },
}
</script>

<style lang="scss">
// .card {
//   min-width: 20%;
//   max-width: 45%;
//   min-height: 10rem;

//   border: 1px solid #000;
//   margin-bottom: 2rem;

//   &:nth-child(2n) {
//     margin-left: 2rem;
//   }

//   img {
//     max-height: 280px;
//   }
// }

// .card-bottom {
//   padding: 1rem;
// }
</style>