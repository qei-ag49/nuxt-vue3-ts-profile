
export type Item = {
  id: number
  name: string
  age: number
  imgSrc?: string
}

/** スキルのカード表示コンテンツ */
export type SkillCard = {
  id: number
  title: string
  text: string
  imgSrc: string
}

/** ポートフォリオのカード表示コンテンツ */
export type Portfolio = {
  id: number
  title: string
  text: string
  imgSrc: string
  tags: Array<string>
}

/** Book */
export type Book = {
  title: string
  author: string | string[]
}

/** 商品 */
export type Merchandise = {
  name: string
  price: number
  amount: number
}

export type UseCounter = {
  increment: () => void
  decrement: () => void
  totalPrice: ComputedRef<number>
}
