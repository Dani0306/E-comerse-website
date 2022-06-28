import { createContext, useContext, useState, useEffect } from 'react'
import { getcategoriesAndDocuments } from '../utils/firebase.js';

const CategoriesContext = createContext({
    categoriesMap: {},
})



export default function AppCategoriesProvider({ children }){
    const [categoriesMap, setCategoriesMap] = useState({});

    const value = {
        categoriesMap
    }

    useEffect(() => {
        const getData = async () => {
            const data = await getcategoriesAndDocuments();
            setCategoriesMap(data)
        }
        getData()
    }, [])

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}



export const useCategoriesContext = () => useContext(CategoriesContext)