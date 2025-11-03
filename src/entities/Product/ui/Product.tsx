import type { IProduct } from '../model/types'
import classes from './product.module.scss'

const Product = (props: IProduct) => {
  const { id, price, title, images } = props
  console.log(images)

  return (
    <div className={classes.productCard} style={{ backgroundImage: `url(${images[0]})` }}>
      {id} {price} {title}
    </div>
  )
}

export default Product
