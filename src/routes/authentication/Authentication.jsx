import SignUp from '../../components/sign-up-form/SignUp'
import SignIn from '../../components/sign-in-form /SignIn'
import  './authentication.styles.scss'

const Authentication = () => {
  
  return (
    <div className='authentication-container'>
        <SignIn />
        <SignUp />
    </div>
  )
}

export default Authentication