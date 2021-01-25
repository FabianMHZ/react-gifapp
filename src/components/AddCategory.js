import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setcategorias}) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange=(e)=>{
        setinputValue(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();

        if(inputValue.trim().length>2){
        setcategorias(cats=>[inputValue,...cats]);
        setinputValue('');
       // console.log('submit hecho');
    }
}
    return (
        
        <form onSubmit={handleSubmit}>
        {/* <h1>{inputValue}</h1> */}
            <input
            type="text"  
            value={inputValue}
            onChange={handleInputChange}
            />
        </form>
        
    )
}

AddCategory.propTypes ={

    setcategorias: PropTypes.func.isRequired
}
 export default AddCategory;