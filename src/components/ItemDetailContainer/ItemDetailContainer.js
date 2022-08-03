import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const film = {image:"/assets/remera1.jpg", title:"Remera 1" , price: 4000}

export const ItemDetailContainer = () => {
    const [data, setData]= useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(film);
            }, 2000);
        });

        getData.then(res => setData(res));
    }, [])
    return(
        <ItemDetail data={data}/>
    );
}

export default ItemDetailContainer;