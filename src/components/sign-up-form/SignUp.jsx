import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase'
import FormInput from '../form-input/FormInput'
import './sign-up-form.styles.scss'
import Button from '../button/Button'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPasword: ''
}

const SignUp = () => {
    

    const [formFields, setFormFields] = useState(defaultFormFields)

    const { displayName, email, password, confirmPasword } = formFields

    const handleSubmit = async e => {
        e.preventDefault();
        if(password !== confirmPasword){
            alert('Passwords do not match')
            return;
        }
        
        try{
            const { user } = await createAuthUserWithEmailAndPassword(email, password)

                await createUserDocumentFromAuth(user, { displayName })
                setFormFields(defaultFormFields)

        } catch(e){
            if(e.code === '/auth/emaila-already-in-use'){
                alert('Cannot create use, email already in use')
            } else {
                console.log(e)
            }
        }

    }

    const handleChange = e => {
        const { value, name } = e.target;

        setFormFields({ ...formFields, [name]: value })

    }

  return (
    <div className='sign-up-container'>
        <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
            <FormInput label="Display name" onChange={handleChange} value={formFields.displayName} name='displayName' type="text" required/>

            <FormInput label="Email" onChange={handleChange} value={formFields.email} name='email' type="email" required/>

            <FormInput label="Password" onChange={handleChange} value={formFields.password} name='password' type="password" required/>

            <FormInput label="Confirm Password" onChange={handleChange} value={formFields.confirmPasword} name='confirmPasword' type="password" required/>
            <Button type='submit'>Sign Up</Button>
        </form>
    </div>
  )
}

export default SignUp