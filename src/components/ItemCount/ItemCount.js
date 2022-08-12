import {useState, useContext} from 'react'
import { CartContext } from '../../context/CartContext'


const ItemCount = ({setContadorSelet, stock, productData}) => {
    const { addProductToCart } = useContext(CartContext)

    const [contador, setContador] = useState(1)

    const addNumber = () =>{
        setContador(contador + 1)
    }
    const removeNumber = () =>{
        setContador(contador - 1)
    }
    const onAdd = () =>{
        console.log("Agregar al Carrito: ", productData)
        addProductToCart([productData])
        setContadorSelet(contador)
    }
    return (
        <>
            <div className='countProd'>
                <button disabled={contador <= 1} onClick={removeNumber}>-</button>
                <span>{contador}</span>
                <button disabled={contador >= stock} onClick={addNumber}>+</button>
            </div>
            <button onClick={onAdd}>AGREGAR A CARRITO</button>
        </>
    )
}

export default ItemCount