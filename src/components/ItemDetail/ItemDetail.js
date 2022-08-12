import React from "react";
import './ItemDetail.scss';
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";


const ItemDetail = ({data}) => {
    const [contador, setContadorSelet] = useState(0)
    return(
        <>
        <div className="item-detail-image">
            <img className='detail_image' src={`/assets/${data.image}`} alt="no disponible" />
            <div className="detail_info">
                <span className="category">{data.category} /</span>
                <h2>{data.title}</h2>
                <h3>Cod. {data.code}</h3>
                <p className="detail_price">$ {data.price}</p>
                {console.log("Cantidad contador: ", contador)}
                {
                    contador > 0 ? <Link to="/cart"> <button>TERMINAR COMPRA</button></Link> : <ItemCount setContadorSelet={setContadorSelet} productData={data} className="buttonDetailCount"/>
                }
            </div>
        </div>
    </>
)
}

export default ItemDetail;