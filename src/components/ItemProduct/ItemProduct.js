import './ItemProduct.scss'
import  {Link} from 'react-router-dom'

const ItemProduct = ({data, action, onAdd}) => {
    //console.log("Muestra data: ", {data})
    const {title, image, price, stock, id} = data
    return (
        <Link to={`/productos/${id}`}>
            <div className="item-product">
                <img src={` /assets/${image}`} alt="Imagen producto"/>
                <p className='itemProductsTitle'>{title}</p>
                <span>$ {price}</span>
                {/* <ItemCount initial={1} stock={stock} onAdd={onAdd}/> */}
                <p>En stock {stock}u.</p>
                <button>Comprar</button>
            </div>
        </Link>
    )
}
export default ItemProduct