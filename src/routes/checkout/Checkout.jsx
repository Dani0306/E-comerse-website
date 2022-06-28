import CheckoutItem from "../../components/checkout-item/CheckoutItem"
import { useCartContext } from "../../context/cart.context"
import './checkout.styles.scss'

const Checkout = () => {

  const { cartItems, total } = useCartContext()

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map(item => <CheckoutItem key={item.id} cartItem={item}/>)
      }
      <span className="total">Total: {total} $</span>
    </div>
  )
}

export default Checkout