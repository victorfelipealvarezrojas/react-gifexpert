import React, { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';
import { getGis } from './helpers/getGis';
//{useFetchGift} entre {} xq su return es explicito
import {useFetchGift} from './hooks/useFetchGift';

export const GifGrid = ({ category }) => {
    //es un custom hook useFetchGift y le entrego la categoria abuscar que me retorna el arreglo de imagenes en (data)
    //realizo un desestructuring (  const {data,loading} ) que tiene la estructura del objeto devuelto x useFetchGift
   //renombro data por iamges (data:images)
    const {data:images,loading} = useFetchGift(category);
    return (
        <>
            <h3>categoria de busqueda: {category}</h3>
            { loading && <p>Loading</p> } 
            <div className="card-grid">
                {
                    //utilizo la data entregada por el custom hook que contiene la imagen a desplegar
                    images.map(img => (
                        //este componente muestra la imagen y el titulo
                        < GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}