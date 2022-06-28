import Button from '../button/Button'
import './cart-drop-down.scss'
import CartItem from '../cart-item/CartItem'
import { useCartContext } from '../../context/cart.context'
import { useNavigate } from 'react-router-dom'

const CartDropDown = () => {

const { cartItems } = useCartContext()
const navigate = useNavigate()

  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
            {
                 cartItems.length && cartItems.map(item => (
                   <CartItem key={item.id} cartItem={item}/>
                ))
            }
        </div>
            <Button onClick={() => navigate('/checkout')}>Go to checkout</Button>
    </div>
  )
}

export default CartDropDown