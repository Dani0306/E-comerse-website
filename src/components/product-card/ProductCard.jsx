import './product-card.scss'
import Button from '../button/Button'
import { useCartContext } from '../../context/cart.context';  

const ProductCard = ({ product }) => {
  const { addItemToCart } = useCartContext()
  const { name, price, imageUrl } = product;

  const handleAdd = () => addItemToCart(product)

  return (
    <div className='product-card-container'>
        <img src={imageUrl} alt={name} />
        <div className='footer'>
          <span className='name'>{name}</span>
          <span className='price'>{price}</span>
        </div>
      <Button buttonType={'inverted'} onClick={handleAdd}>Add to car</Button>
    </div>
  )
}

export default ProductCard