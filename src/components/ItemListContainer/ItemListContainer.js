import ItemProduct from "../ItemProduct/ItemProduct"

const ItemListContainer = ({section}) => {
    return(
        <div className="list-products">
            <h2>{section}</h2>
            <ItemProduct title="remera1" price="5000" image={'remera1.jpg'}/>
            <ItemProduct title="remera2" price="6000" image={'remera2.jpg'}/>
            <ItemProduct title="remera3" price="7000" image={'remera3.jpg'}/>
            <ItemProduct title="remera4" price="8000" image={'remera4.jpg'}/>
        </div>
    )
}

export default ItemListContainer