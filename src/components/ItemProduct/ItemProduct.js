import { useState, useEffect, useContext } from 'react'
import './ItemProduct.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';

const ItemProduct = ({data, action}) => {
    const { handleClick, name } = useContext(CartContext)


    const [contador, setContador] = useState(1)
    const {title, image, price, id} = data

    const addNumber = () => {
        setContador(contador + 1)
    }
    const removeNumber = () => {
        setContador(contador - 1)
    }

    useEffect( () => {
        console.log("Actualizacion")
        // setContador(1)
    }, [contador])

    const addToCart = (e) => {
        console.log("click Producto", e)
        e.preventDefault();
    }


    return(
        <div className="item-product">
            <Link to={`/productos/${id}`}> 
                <img src={`/assets/${image}`} alt="Imagen producto" />
                <div className='detail-product'>
                    <div className='styleTitle'>
                        <h2>{title}</h2>
                    </div>
                    <span className='stylePrice' onClick={addToCart}>$ {price}</span>
                    <button onClick={addToCart}>COMPRAR</button>
                </div>
            </Link>
        </div> 
    )
}

export default ItemProduct