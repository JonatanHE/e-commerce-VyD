import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import Checkout from "../../pages/Checkout"

const Cart = () => {
    const { cartProducts } = useContext(CartContext)


    return(
        <>
        <div>Carrito de checkout</div>
        {console.log("cartProducts dede checkout: ",cartProducts)}
        <Checkout />
        </>
    )
}

export default Cart