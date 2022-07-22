import './ItemProduct.scss'

const ItemProduct = (props) => {
    console.log("Propiedades: ", props.title, props.price)
    return (
        <div className="item-product">
            <img src={` /assets/${props.image}`} alt="Imagen producto"/>
            <p>{props.title}</p>
            <span>$ {props.price}</span>
            <button>Comprar</button>
        </div>
    )
}
export default ItemProduct