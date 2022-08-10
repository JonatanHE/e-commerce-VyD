import {useState} from 'react'

const ItemCount = ({setContadorSelet,stock}) => {
    const [contador, setContador] = useState(1)

    const addNumber = () =>{
        setContador(contador + 1)
    }
    const removeNumber = () =>{
        setContador(contador - 1)
    }
    const onAdd = () =>{
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