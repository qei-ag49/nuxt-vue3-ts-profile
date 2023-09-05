import { SkillCard } from "~/types/common";

export const skills: SkillCard[] = [
  {
    id: 1,
    title: "HTML / CSS(SCSS)",
    periodOfExperience: "3.5年",
    percentage: 60,
    text: "WEB制作会社で1年ほどの実務経験を経て、基本的なタグや属性、またSCSSコーディングについて学びました。",
    detailText: "gulpなどの経験もあります。",
    imgSrc: "/images/icon-scss.jpeg",
    // imgSrc: "https://via.placeholder.com/500x400.png?text=Card+1"
  },
  {
    id: 2,
    title: "Vue / Nuxt",
    periodOfExperience: "2.0年",
    percentage: 50,
    text: "Vue2.6系, OptionsAPIで書いていました。保守しやすくために、なるべくVuexストアではなく親子間でデータの伝播を管理するなどの意識を持ってコーディングをしていました。現在はVue3系をキャッチアップ中です",
    detailText: "nuxt-property-decoratorというモジュールを使用して、Javaライクな記法でコーディングしていました。",
    imgSrc: "/images/icon-nuxt.png",
  },
  {
    id: 3,
    title: "JavaScript / TypeScript",
    periodOfExperience: "2.0年",
    percentage: 40,
    text: "ES6系の記述、可読性のためネストの浅い記述を意識していました。また型指定を使用して処理を書いていました。",
    detailText: "TypeScriptは、APIのRequest, Responseや固定値などへの型付けで使用する機会が多くありました。",
    imgSrc: "/images/icon-jsts.jpeg",
  },
  {
    id: 4,
    title: "Java / SpringBoot",
    periodOfExperience: "1.5年",
    percentage: 40,
    text: "APIサーバーとしての構成を触ってきました。\nドメイン駆動設計（DDD）に沿って開発を進めていました。",
    detailText: "MyBatis, Jpa, Flyway, Lombok, PostgreSQL",
    imgSrc: "/images/icon-sb.png",
  },
  {
    id: 5,
    title: "Git / Git flow",
    periodOfExperience: "2.0年",
    percentage: 70,
    text: "git flowでチーム開発をしていました。実際に使用しているサービスは、AWS CodeCommitです。",
    detailText: "",
    imgSrc: "/images/icon-git.png",
  },
  {
    id: 6,
    title: "AWS",
    percentage: 40,
    text: "S3, ECS(Fargate), CodePipeline, CodeBuild",
    detailText: "CI/CD環境でのECS Fargateコンテナへのアプリケーションのデプロイなどの経験があります。\nまた、AWSコスト把握のためにタグ無しのリソースをaws cliなどで抽出し分析する対応などを行いました。",
    periodOfExperience: "1.5年",
    imgSrc: "images/icon-aws.png",
  },
  {
    id: 7,
    title: "Terraform / CloudFormation",
    percentage: 10,
    text: "AWSのインフラの展開に非常に重要と考え、少しずつキャッチアップしていきたいと思っています。",
    detailText: "ポートフォリオ作成に使用しました。",
    periodOfExperience: "自己学習",
    imgSrc: "images/icon-tf.png",
  },
  {
    id: 8,
    title: "PHP / Laravel",
    periodOfExperience: "自己学習",
    percentage: 10,
    text: "Laravel8を学習しました。7.4以降の型の使用を好みます。",
    detailText: "ポートフォリオ作成に使用しました。",
    imgSrc: "/images/icon-laravel.png",
  },
]
