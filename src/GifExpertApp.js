
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = ()=>{

    //const categorias =['Onepunch','Naruto','Dragonball'];
    
    const [categorias, setcategorias] = useState(['Onepunch']);
    // const handleAdd =()=>{

    //     //setcategorias([...categorias,'Shingeki']);
    //     setcategorias(cats=>[...cats,'Shingeki']);
    // }
    return (

        <>
        <h2>GifExpertApp</h2>
        <AddCategory setcategorias={setcategorias}/>
        <hr></hr>
        {/* <button onClick ={handleAdd}>Agregar</button> */}
        <ol>
        {
            categorias.map(category=>(

                <GifGrid key={category}
                category={category}/>
            ))
                

            
        }

        </ol>


        
        
        </>
    
    )





}


