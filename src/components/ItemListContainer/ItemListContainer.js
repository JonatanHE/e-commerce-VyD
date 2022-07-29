import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.scss'
import products from '../../utils/products.mock'

const ItemListContainer = ({section}) => {

    const [listProducts, setListProducts] = useState([])

    const getProducts = new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(products)
        }, 2000)
    })

    useEffect(() => {
        getProducts
            .then( (res) => {
                setListProducts(res)
            })
            .catch( (error) => {
                console.log("la llama fallo")
            })
            .finally( () => {
            })
    },[])

    return(
        <div className='list-products'>
            <h2>{section}</h2>
            <ItemList dataProducts={listProducts}/>
        </div>
    )
}

export default ItemListContainer