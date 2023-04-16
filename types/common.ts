
export type Item = {
  id: number
  name: string
  age: number
  imgSrc?: string
}

export type SkillCard = {
  id: number
  imgSrc: string
  title: string
  text: string
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
