import ItemCount from '../ItemCount/ItemCount'
import './ItemProduct.scss'

const ItemProduct = ({data, action, onAdd}) => {

    const {title, image, price, stock} = data
    return (
        <div className="item-product">
            <img src={` /assets/${image}`} alt="Imagen producto"/>
            <p>{title}</p>
            <span>$ {price}</span>
            <ItemCount initial={1} stock={stock} onAdd={onAdd}/>
            <p>En stock {stock}u.</p>
            <button>Comprar</button>
        </div>
    )
}
export default ItemProduct