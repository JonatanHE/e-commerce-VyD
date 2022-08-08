import React from "react";
import './ItemDetail.scss';
export const ItemDetail = ({data}) => {
    return(
        <>
        <div className="item-detail-image">
            <img className='detail_image' src={data.image} alt="" />
            <div className="detail_info">
                <span className="category">Hombre / Remeras</span>
                <h2>{data.title}</h2>
                <p className="detail_price">$ {data.price}</p>
                <span className="detailTituloTalles">Talles</span>
                <div className="detailTalleButton">
                    <button>XS</button>
                    <button>S</button>
                    <button>M</button>
                    <button>L</button>
                    <button>XL</button>
                </div>
            </div>
        </div>
    </>
)
}

export default ItemDetail;