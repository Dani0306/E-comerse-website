import { signInWithGooglePopup, createUserDocumentFromAuth, auth } from '../../utils/firebase'
import SignUp from '../../components/sign-up-form/SignUp'
import SignIn from '../../components/sign-in-form /SignIn'
import  './authentication.styles.scss'

const Authentication = () => {

  const loogGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    await createUserDocumentFromAuth(user);
}
  
  return (
    <div className='authentication-container'>
        <SignIn/>
        <SignUp />
    </div>
  )
}

export default Authentication