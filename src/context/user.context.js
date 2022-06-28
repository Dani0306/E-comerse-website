import { createContext, useContext, useState, useEffect } from 'react'

import { createUserDocumentFromAuth, onAuthStateChangedListener, signOutUser } from '../utils/firebase'

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})


export default function AppContextProvider({ children }){

    const [currentUser, setCurrentUser] = useState(null)
    const value = {
        currentUser, setCurrentUser
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChangedListener((user) => {
            if(user){
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user)
        })
        return unsubcribe
    }, [])

    return (

<UserContext.Provider value={value}>
        { children }
    </UserContext.Provider>
    )
}



export const useUserContext = () => useContext(UserContext)