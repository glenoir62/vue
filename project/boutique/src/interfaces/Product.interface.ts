import type { Category } from './Filters.interface'

export interface ProductInterface {
  title: string
  image: string
  price: number
  description: string
  id: number
  category: Category
}
