import { createContext, useState } from "react";

export const CartContext = createContext ()

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])
    console.log("cartProducts: ", cartProducts)

    const addProductToCart = (product) => {
        setCartProducts([...cartProducts, product])
    }

    const data = {
        cartProducts,
        setCartProducts,
        addProductToCart
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>

    )
}

export default CartProvider