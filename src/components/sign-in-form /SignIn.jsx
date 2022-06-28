import { useState } from 'react'
import {  signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase'
import FormInput from '../form-input/FormInput'
import './sign-in-form.styles.scss'
import Button from '../button/Button'

const defaultFormFields = {
    email: '',
    password: '',
}

const SignIn = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)

    const { email, password } = formFields

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    const handleSubmit = async e => {
        e.preventDefault();

        try{
            await signInAuthUserWithEmailAndPassword(email, password)
        } catch(e){
            switch(e.code){
                case "auth/wrong-password": 
                    alert("Wrong Email or password")
                break
                case "auth/user-not-found": 
                    alert('Wrong Email or password')
                break
                default: console.log(e)
            }

        }
            

    }

    const handleChange = e => {
        const { value, name } = e.target;

        setFormFields({ ...formFields, [name]: value })

    }

  return (
    <div className='sign-up-container'>
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>

            <FormInput label="Email" onChange={handleChange} value={formFields.email} name='email' type="email" required/>

            <FormInput label="Password" onChange={handleChange} value={formFields.password} name='password' type="password" required/>

            <div className='buttons-container'>
                <Button type='submit'>Sign In</Button>
                <Button type='button' buttonType={'google'} onClick={signInWithGoogle}>Sign in with Google</Button>
            </div>
        </form>
    </div>
  )
}

export default SignIn