import { useState, useEffect } from 'react';
import { getGis } from '../helpers/getGis';
//esto e sun custom hook
export const  useFetchGift = (category) => {
    //defino un nuevo state con la siguiente estructura(data,loading)
    //el state es la informacion que se encuentra en el useState
    const [state, setState] = useState({
        data: [],
        loading: true
    });

   //se gatilla al iniciar el componente y al tener un cambio en (, [category]), es decir recibir un nuevo valor
    useEffect(() => {
        //getGis es una promesa a la cual le entrego la categoria y adema ejecuta el consumo al Api las promesas usan (.then)
        getGis(category)
            .then(img => {
                setState({
                    data: img,
                    loading: false
                })
            })
    }, [category])
    //,[category] cuando la categoria cambia se vuelve a realizar lo de useEffect
    return state;
}