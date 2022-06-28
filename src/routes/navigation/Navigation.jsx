import { Outlet, Link } from 'react-router-dom'
import { Fragment } from 'react'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import './navigation.styles.scss'
import { useUserContext } from '../../context/user.context'
import { signOutUser } from '../../utils/firebase'
import CartIcon from '../../components/cart-icon/CartIcon'
import CartDropDown from '../../components/cart-dropdown/CartDropDown'
import { useCartContext } from '../../context/cart.context'

const Navigation = () => {

  const { isCartOpen } = useCartContext()
  const { currentUser } = useUserContext()

  const signOutHandler = async () => {
    await signOutUser()
  }

    return (
      <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
                <CrownLogo className='logo' />
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                    Shop
                </Link>
                {
                  currentUser ? (
                    <span className='nav-link' onClick={signOutHandler}>Sign out</span>
                  ) : (
                    <Link className='nav-link' to='/auth'>
                      Login
                    </Link>
                  )
                }
                <CartIcon />
            </div>
            {isCartOpen && <CartDropDown />}
        </div>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation