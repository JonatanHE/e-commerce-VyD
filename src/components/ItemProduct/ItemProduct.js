import ItemCount from '../ItemCount/ItemCount'
import './ItemProduct.scss'

const ItemProduct = ({data, action}) => {

    const {title, image, price, stock} = data
    return (
        <div className="item-product">
            <img src={` /assets/${image}`} alt="Imagen producto"/>
            <p>{title}</p>
            <span>$ {price}</span>
            <ItemCount />
            <p>En stock {stock}u.</p>
            <button>Comprar</button>
        </div>
    )
}
export default ItemProduct