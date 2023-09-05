import { Experience } from "~/types/common";

export const EXPERIENCE: Experience[] = [
  {
    title: "概要",
    periodOfExperience: "3.5年",
    text: "業務アプリケーションのSaasサービスの開発・運用対応をしていました。",
    imgSrc: "/images/icon-scss.jpeg",
    // imgSrc: "https://via.placeholder.com/500x400.png?text=Card+1"
  },
  {
    title: "自身の対応範囲",
    periodOfExperience: "2.0年",
    text: "一般開発メンバーとして、チケットの内容に添い、フロント・バックエンドの修正をメインで行いました。ローテーションで、週1回のリリースやコードレビューもしていました。",
    imgSrc: "/images/icon-nuxt.png",
  },
  {
    title: "チーム体制",
    periodOfExperience: "2.0年",
    text: "チーム体制はエンジニア約4人で、Backlogを使用したチケット駆動開発で、一部スクラム体制で進めていました。 メンバー全員でローテーションで週1回のリリース対応、また都度他社のPRのコードレビューを行っていました。",
    imgSrc: "/images/icon-jsts.jpeg",
  },
  {
    title: "チーム体制",
    periodOfExperience: "1.5年",
    text: "社内の営業・CS（カスタマーサクセス）メンバーから、お客様の要望を確認し要件や優先順位、仕様などを確認し実装に入る流れです。",
    imgSrc: "/images/icon-sb.png",
  },
  {
    title: "実装・コーディング",
    periodOfExperience: "2.0年",
    text: "API通信が走る機会は必要最低限か、固定の文字列を使用する場合は定数化する、操作パターンが網羅できているか、などを意識しながら対応しています。",
    imgSrc: "/images/icon-git.png",
  },
  {
    title: "レビュー・リリース体制",
    text: "原則週1回のリリースをしていました。 AWS Codeシリーズを利用したCI / CDを利用していました。 全員のレビューが通過したらチケットのブランチ内容をdevelopブランチにマージ、ステージングブランチにマージ、本番用のブランチにマージという流れでした。",
    periodOfExperience: "1.5年",
    imgSrc: "images/icon-aws.png",
  },
]
