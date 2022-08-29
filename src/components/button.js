import React from 'react';
import "../style-sheets/Button.css";

function Button({texto, isClickButton, handleClick}){
    
    return (
        <button 
            className={ isClickButton ? 'click-button' : 'reset-button' }
            onClick={ handleClick}>
            {texto}
        </button>
    )
}


export default Button;

//export por defecto default solo importa un elemento del archivo
//event listener onClick recibo la funcion como un props