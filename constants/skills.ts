import { SkillCard } from "~/types/common";

export const skills: SkillCard[] = [
  {
    id: 1,
    title: "HTML / CSS(SCSS)",
    periodOfExperience: "3.5年",
    percentage: 60,
    text: "WEB制作会社で1年ほどの実務経験を経て、基本的なタグや属性、またSCSSコーディングについて学びました。",
    detailText: "gulpなどの経験もあります。",
    imgSrc: "https://via.placeholder.com/500x400.png?text=Card+1"
  },
  {
    id: 2,
    title: "Vue / Nuxt",
    periodOfExperience: "2.0年",
    percentage: 50,
    text: "Vue2.6系, OptionsAPIで書いていました。保守しやすくために、なるべくVuexストアではなく親子間でデータの伝播を管理するなどの意識を持ってコーディングをしていました。現在はVue3系をキャッチアップ中です",
    detailText: "nuxt-property-decoratorというモジュールを使用して、Javaライクな記法でコーディングしていました。",
    imgSrc: "https://via.placeholder.com/500x400.png?text=Card+1"
  },
  {
    id: 3,
    title: "JavaScript / TypeScript",
    periodOfExperience: "2.0年",
    percentage: 40,
    text: "ES6系の記述、可読性のためネストの浅い記述を意識していました。また型指定を使用して処理を書いていました。",
    detailText: "TypeScriptは、APIのRequest, Responseや固定値などへの型付けで使用する機会が多くありました。",
    imgSrc: "https://via.placeholder.com/500x400.png?text=Card+1"
  },
  {
    id: 4,
    title: "Java / SpringBoot",
    periodOfExperience: "1.5年",
    percentage: 50,
    text: "APIサーバーとしての構成を触ってきました。\nドメイン駆動設計（DDD）に沿って開発を進めていました。",
    detailText: "MyBatis, Jpa, Flyway, Lombok, PostgreSQL",
    imgSrc: "https://via.placeholder.com/500x400.png?text=Card+1"
  },
  {
    id: 5,
    title: "Git / Git flow",
    periodOfExperience: "2.0年",
    percentage: 70,
    text: "git flowでチーム開発をしていました。\n実際に使用しているサービスは、AWS CodeCommitです。",
    detailText: "",
    imgSrc: "https://via.placeholder.com/500x400.png?text=Card+1"
  },
  {
    id: 6,
    title: "AWS",
    percentage: 40,
    text: "S3, ECS(Fargate), CodePipeline, CodeBuild",
    detailText: "CI/CD環境でのECS Fargateコンテナへのアプリケーションのデプロイなどの経験があります。\nまた、AWSコスト把握のためにタグ無しのリソースをaws cliなどで抽出し分析する対応などを行いました。",
    periodOfExperience: "1.5年",
    // imgSrc: "https://via.placeholder.com/500x400.png?text=Card+1"
    imgSrc: "https://camo.qiitausercontent.com/20fb3c52a7e918708740d4294584298ddce6d50e/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f3836373737352f65366438356663312d376166392d663430392d626561352d6637323939343035303831302e706e67"
  },
]
