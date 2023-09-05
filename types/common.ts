
/** スキルのカード表示コンテンツ */
export type SkillCard = {
  id: number
  title: string
  periodOfExperience?: string
  text: string
  detailText: string
  imgSrc: string
  percentage: number
}

/** ポートフォリオのカード表示コンテンツ */
export type Portfolio = {
  id: number
  title: string
  text: string
  imgSrc: string
  tags: Array<string>
  deployedTo?: string
  githubSrc?: string
}

// export type Item = {
//   id: number
//   name: string
//   age: number
//   imgSrc?: string
// }

// export type Book = {
//   title: string
//   author: string | string[]
// }

// export type Merchandise = {
//   name: string
//   price: number
//   amount: number
// }

// export type UseCounter = {
//   increment: () => void
//   decrement: () => void
//   totalPrice: ComputedRef<number>
// }
