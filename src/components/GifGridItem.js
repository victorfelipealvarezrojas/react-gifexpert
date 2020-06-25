import React from 'react';

//realizo una desestructuracion de images
//images en {id,title}
export const GifGridItem =({title,url}) =>{
   return (
        <div className="card nimate__animated animate__bounce ">
          <img src={url} alt = {title}></img>
          <p> {title}</p>
        </div>
   )
}