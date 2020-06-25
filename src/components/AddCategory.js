import React, { useState } from 'react';
//importacion de PropTypes que permite agregar validaciones a mi componente 
import PropTypes from 'prop-types'
//setCategories contiene los nombres  a buscar de los gifs
export const AddCategory = ({ setCategories }) => {

    //swfini state para manipular valor del input text
    //valor x defecto ['One Punch']
    const [inputValue, setInputValue] = useState('');

    //me permite cambiar el valor de text que pasa de sde setInputValue a InputValue
    const handleInputChange = (e) => {
        //modifico el valor de inputValue x medio de setInputValue
        setInputValue(e.target.value);
    }

    const handleaSubmit = (e) => {
        //preventDefault evito que ocurra refrescar la pagina
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            //[inputValue,...cats] al contenido inicial cats le agrega un nuevo contenido inputvalue
            setCategories(cats => [inputValue,...cats]);
            setInputValue('');
        }
    }



    return (
        <form onSubmit={handleaSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

//valido que s erequiera setCategories en mi compinnete junto con otras validaciones
AddCategory.propTypes ={
    setCategories: PropTypes.func.isRequired
}