import type { IProduct } from '../../../entities/Product/model/types'

export const getProducts = async (): Promise<IProduct[]> => {
  try {
    const response = await fetch('https://api.escuelajs.co/api/v1/products')
    const result = await response.json()
    return result
  } catch (error) {
    console.log(error)
    return []
  }
}
