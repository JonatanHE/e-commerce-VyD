import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.scss'
import products from "../../utils/products.mock"
import { useParams } from 'react-router-dom'
import Modal from '../Modal/Modal'

const ItemDetailContainer = () => {
    const [productData, setProductData] = useState({})
    const [showModal, setShowModal] = useState(false)
    const { id } = useParams()

    useEffect( () => {
        filterById()
    }, [id])

    const filterById = () => {
        products.some( (product) => {
            if(product.id == id) {
                console.log("producto filtrado: ", product)
                setProductData(product) 
            }
        }
    )
    }
    return(
        <div className={`container-item-detail ${showModal ? 'overlay-black' : ''}`}>
            <ItemDetail data={productData} setShowModal={setShowModal}/>
            {showModal && (
                <Modal title="Imagen Producto" close={setShowModal}>
                    <img src={`/assets/${productData.image}`} />
                </Modal>
            )}
        </div>
    )
}

export default ItemDetailContainer