import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.scss'
import { useParams } from 'react-router-dom'
import Modal from '../Modal/Modal'
import db from "../../firebaseConfig"
import { doc, getDoc } from "firebase/firestore"

const ItemDetailContainer = () => {
    const [productData, setProductData] = useState({})
    const [showModal, setShowModal] = useState(false)
    const { id } = useParams()

    useEffect( () => {
        getProduct()
        .then((res) => {
            setProductData(res)
        })
    }, [id])

    const getProduct = async () => {
        const docRef = doc(db, 'productos', id)
        const docSnapshot = await getDoc(docRef)
        let product = docSnapshot.data()
        product.id = docSnapshot.id
        console.log('data con id:', product)
        return product
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