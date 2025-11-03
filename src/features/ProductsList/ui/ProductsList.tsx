import { useEffect, useState } from 'react'
import type { IProduct } from '../../../entities/Product/model/types'
import { getProducts } from '../model/api'
import { Product } from '../../../entities'
import classes from './productList.module.scss'

const ProductsList = () => {
  const [productsList, setProductsList] = useState<IProduct[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts()
      setProductsList(data)
    }

    fetchProducts()
  }, [])

  return (
    <div className={classes.productContainer}>
      {productsList.map((product) => (
        <Product {...product} key={product.id} />
      ))}
    </div>
  )
}

export default ProductsList
