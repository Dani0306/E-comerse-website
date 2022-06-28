import './cart-icon.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { useCartContext } from '../../context/cart.context' 

const CartIcon = () => {

    const { isCartOpen, setIsCartOpen } = useCartContext()
    const { totalItems } = useCartContext();

  return (
    <div className='cart-icon-container' onClick={() => setIsCartOpen(!isCartOpen)}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{totalItems}</span>
    </div>
  )
}

export default CartIcon