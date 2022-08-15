import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"

const ItemCount = ({setQuantitySelected, productData}) => {
    const { addProductToCart } = useContext(CartContext)

    const [countQuantity, setCountQuantity] = useState(1)

    const addQuantity = () => {
        setCountQuantity(countQuantity + 1)
    }
    
    const removeQuantity = () => {
        setCountQuantity(countQuantity - 1)
    }

    const onAdd = () => {
        console.log("Agregar al carrito: ", productData)
        addProductToCart(productData)
        setQuantitySelected(countQuantity)
    }

    return(
        <>
            <div className="container-count">
                <button onClick={removeQuantity}>-</button>
                <span>{countQuantity}</span>
                <button onClick={addQuantity}>+</button>
            </div>
            <button onClick={onAdd}>AGREGAR AL CARRITO</button>
        </>
    )
}

export default ItemCount