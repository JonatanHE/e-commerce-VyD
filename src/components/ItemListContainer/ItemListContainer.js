import ItemProduct from "../ItemProduct/ItemProduct"
import './ItemListContainer.scss'

const ItemListContainer = ({section}) => {

    return(
        <div className="list-products">
            <h2>{section}</h2>
            <ItemProduct title="remera1" price="5000" image={'remera1.jpg'} stock="10"/>
            <ItemProduct title="remera2" price="6000" image={'remera2.jpg'} stock="8"/>
            <ItemProduct title="remera3" price="7000" image={'remera3.jpg'} stock="3"/>
            <ItemProduct title="remera4" price="8000" image={'remera4.jpg'} stock="7"/>
        </div>
    )
}

export default ItemListContainer