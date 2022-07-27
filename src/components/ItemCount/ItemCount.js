import {useState} from 'react'

const ItemCount = ({stock}) => {
    const [contador, setContador] = useState(0)

    const addNumber = () =>{
        setContador(contador + 1)
    }
    const removeNumber = () =>{
        setContador(contador - 1)
    }
    return (
        <div className='countProd'>
            <button onClick={removeNumber}>-</button>
            <p>{contador}</p>
            <button onClick={addNumber}>+</button>
        </div>
    )
}

export default ItemCount