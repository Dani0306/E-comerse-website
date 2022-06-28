import { useCartContext } from '../../context/cart.context'
import './checkoutitem.styles.scss'

const CheckoutItem = ({ cartItem }) => {

    const { name, imageUrl, price, quantity } = cartItem
    const { removeItemFromCart, addItemToCart, clearItemFromCart } = useCartContext()

    const addItemHandler = () => addItemToCart(cartItem)
    const removeHandler = () => removeItemFromCart(cartItem)
    const clearHandler = () => clearItemFromCart(cartItem)

  return (
    <div className='checkout-item-container'>
        <div className='image-container'>
            <img src={imageUrl} alt={name} />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div onClick={removeHandler} className='arrow'>
                &#10094;
            </div>
            <span className='value'>{quantity}</span>
            <div onClick={addItemHandler} className='arrow'>
                &#10095;
            </div>
        </span>
        <span className='price'>{price}</span>
        <div onClick={clearHandler} className='remove-button'>&#10005;</div>
    </div>
  )
}

export default CheckoutItem