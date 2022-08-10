import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import products from "../../utils/products.mock";
import {useParams} from "react-router-dom"


const ItemDetailContainer = () => {
    const [data, setData]= useState({})
    //console.log("Productos desde detalles: ", products)
    console.log("useParams: ", useParams())
    const {id, category} = useParams()
    console.log("ID de Parametro: ", id, "categoria: ", category)
    
    useEffect(() => {
        filterById()
    },[id])

    const filterById = () =>{
            products.some((product) => {
                if(product.id == id ){
                    console.log("Producto filtrado ", product)
                    setData(product)
                }
            }
        )
        }

            /*useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, 2000);
        });

        getData.then(res => setData(res));
        }, []) */
    return(
        <ItemDetail data={data}/>
    );
}

export default ItemDetailContainer;