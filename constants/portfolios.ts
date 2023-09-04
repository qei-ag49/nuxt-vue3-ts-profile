import { Portfolio } from "~/types/common";

export const GITHUB_URL: string = "https://github.com/qei-ag49"

export const portfolios: Array<Portfolio> = [
  {
    id: 1,
    title: "Profile",
    text: "このサイトです。フロントエンドのみの実装です。",
    deployedTo: "firebase",
    imgSrc: "https://via.placeholder.com/500x300.png?text=Card+1",
    githubSrc: `${GITHUB_URL}/nuxt-vue3-ts-profile`,
    tags: [
      "Nuxt3", "Vue3", "TypeScript"
    ],
  },
  {
    id: 2,
    title: "サンプル動画学習サイト",
    text: "バックエンドはAPIサーバーとしてLaravel8、フロント側はNuxt3+TypeScriptの構成です。",
    deployedTo: "firebase + AWS ECS Fargate",
    // imgSrc: "https://via.placeholder.com/500x300.png?text=Card+1",
    imgSrc: "https://camo.qiitausercontent.com/20fb3c52a7e918708740d4294584298ddce6d50e/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f3836373737352f65366438356663312d376166392d663430392d626561352d6637323939343035303831302e706e67",
    githubSrc: `${GITHUB_URL}/laravel8-video-learning`,
    tags: [
      "Laravel", "PHP", "Nuxt3", "TypeScript", "AWS"
    ],
  },
]

/** ポートフォリオ詳細 */
export const portfolioDetails: Omit<Portfolio, "tags">[] = [
  {
    id: 1,
    title: "Profile",
    text: "このサイトです。フロントエンドのみの実装です。",
    deployedTo: "firebase",
    imgSrc: "",
  },
  {
    id: 2,
    title: "サンプル動画学習サイト",
    text: "バックエンドはAPIサーバーとしてLaravel8、フロント側はNuxt3+TypeScriptの構成です。",
    deployedTo: "AWS ECS Fargate",
    imgSrc: "",
  },
]
