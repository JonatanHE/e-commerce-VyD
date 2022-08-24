import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.scss'
import { collection, getDocs } from "firebase/firestore"
import db from "../../firebaseConfig"

const ItemListContainer = ({section}) => {

    const [listProducts, setListProducts] = useState([])

    const getProducts = async () => {
        const productCollection = collection(db, 'productos')
        const productSnapshot = await getDocs(productCollection)
        console.log("prodcutSanpshot", productSnapshot)
        const productList = productSnapshot.docs.map( (doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return productList
    }



    useEffect(() => {
        getProducts()
        .then((res) => {
            setListProducts(res)
        })
    }, [])

    return(
        <div className='list-products'>
            <h2>{section}</h2>
            <ItemList dataProducts={listProducts}/>
        </div>
    )
}

export default ItemListContainer