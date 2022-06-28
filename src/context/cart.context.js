import { createContext, useContext, useState, useEffect } from 'react'

// add item to cart

const addCartITem = (cartItems, itemToAdd) => {

    const already = cartItems.find(x => x.id === itemToAdd.id)
    if(already){
        return cartItems.map(item => item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item )
    }
    
    return [...cartItems, { ...itemToAdd, quantity: 1 }]
}

// remove item from cart

const removeCartItem = (cartItems = [], itemToRemove) => {
    const amount = cartItems.find(x => x.id === itemToRemove.id).quantity;

    if(amount > 1){
        return cartItems.map(item => item.id === itemToRemove.id ? { ...item, quantity: item.quantity - 1 } : item);
    }

    return cartItems.filter(item => item.id !== itemToRemove.id);
}

// remove an item from the cart

const removeItemFromTheCart = (cartItems, item) => cartItems.filter(x => x.id !== item.id);


const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {}, 
    totalItems: 0, 
    removeItemFromCart: () => {},
    clearItemFromCart: () => {}, 
    total: 0
})


export default function AppCartProvider({ children }){

    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([]);
    const [totalItems, setTotalItems] = useState(0)
    const [total, setTotal] = useState(0)

    const addItemToCart = item => {
        setCartItems(addCartITem(cartItems, item))
    }

    const removeItemFromCart = item => {
        setCartItems(removeCartItem(cartItems, item))
    }

    const clearItemFromCart = item => {
        setCartItems(removeItemFromTheCart(cartItems, item))
    }

    const value = {
        isCartOpen, setIsCartOpen, addItemToCart, cartItems, totalItems, removeItemFromCart, clearItemFromCart, total
    }


    useEffect(() => {
        const newTotalItems = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setTotalItems(newTotalItems)
    }, [cartItems])

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
        setTotal(newCartCount)
    }, [cartItems])

    return <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
}


export const useCartContext = () => useContext(CartContext)