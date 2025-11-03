export interface ICategory {
  id: number
  name: string
  slug: string
  image: string
  creationAt: string
  updatedAt: string
}

export interface IProduct {
  id: number
  title: string
  description: string
  price: number
  images: string[]
  creationAt: string
  updatedAt: string
  slug: string
  category: ICategory
}
