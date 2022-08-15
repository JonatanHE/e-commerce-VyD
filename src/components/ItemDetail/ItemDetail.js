import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.scss'
import { useState } from "react"
import { Link } from 'react-router-dom'

const ItemDetail = ({data, setShowModal}) => {
    const [quantitySelected, setQuantitySelected] = useState(0)
    return(
        <>
            <div className="item-detail-image" >
                <img className="styleDetailImage"
                    src={`/assets/${data.image}`} 
                    alt="imagen" 
                    onClick={() => setShowModal(true)}
                />
                <div className="item-detail-info">
                    <span className="category">{data.category}</span>
                    <h2 className="styleDetailTitle">{data.title}</h2>
                    <h3>Cód. {data.code}</h3>
                    <p className="styleDetailPrice">$ {data.price}</p>
                    {console.log("quantitySelected: ", quantitySelected)}
                    {       
                        quantitySelected > 0 ? <button><Link to="/cart">TERMINAR COMPRA</Link></button> : <ItemCount setQuantitySelected={setQuantitySelected} productData={data}/>
                    }
                </div>
                
            </div>
        </>
    )
}

export default ItemDetail