import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.scss';
export const ItemDetail = ({data}) => {
    return(
        <div className="containerDetail">
            <div className="detail">
                <img className='detail_image' src={data.image} alt="" />
                <div className="content">
                    <h1>{data.title}</h1>
                    <span>$ {data.price}</span>
                    <ItemCount className="botonDetail"/>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;