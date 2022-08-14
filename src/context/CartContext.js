import { createContext, useState } from "react";

export const CartContext = createContext ()

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])
    console.log("cartProducts: ", cartProducts)

    const addProductToCart = (product) => {
        setCartProducts([...cartProducts, product])
    }

    const deleteProduct = (product) => {
        console.log("Producto a eliminar:", product)
        setCartProducts(cartProducts.filter( (cartProduct) => cartProduct.id !== product.id) )
    }

    const clear = () => {
        setCartProducts([])
    }


    const data = {
        cartProducts,
        setCartProducts,
        addProductToCart,
        clear,
        deleteProduct  
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>

    )
}

export default CartProvider