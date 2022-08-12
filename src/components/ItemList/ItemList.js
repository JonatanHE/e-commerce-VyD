import ItemProduct from "../ItemProduct/ItemProduct"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const ItemList = ({dataProducts}) => {
    console.log("Informacion desde contexto: ",useContext(CartContext))
    return(
        <>
            {dataProducts.map( (product) => {    
                return <ItemProduct key={product.id} data={product}/>
            })}
        </>
    )
}

export default ItemList