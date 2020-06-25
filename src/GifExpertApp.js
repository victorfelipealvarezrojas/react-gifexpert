import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


//al exportarlo de forma directa necesito en la pagina de importacion llamarlo con {}
export const GifExpertApp = () => {

    //const categories = ['One Punch','Samurai X','Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch'])

    return (
        <>
            <h2>Ingrese Gifs a buscar</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {
                    //rrecorro el contenido de categorias ['One Punch','Samurai X','Dragon Ball'];
                    //y lo asigo a GifGrid por medio del categories.map
                    categories.map(category => (
                      <GifGrid 
                            key = {category}
                            category = {category}
                      />
                    ))
                }
            </ol>
        </>
    )
}
