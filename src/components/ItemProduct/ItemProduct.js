import ItemCount from '../ItemCount/ItemCount'
import './ItemProduct.scss'

const ItemProduct = (props) => {
    return (
        <div className="item-product">
            <img src={` /assets/${props.image}`} alt="Imagen producto"/>
            <p>{props.title}</p>
            <span>$ {props.price}</span>
            <ItemCount />
            <p>En stock {props.stock}u.</p>
            <button>Comprar</button>
        </div>
    )
}
export default ItemProduct