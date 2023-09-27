import React from "react";
import './Button.css'

function Button({text, onClick, id, className}){
    return(
        <button onClick={onClick} className={className} id={id}>{text}</button>
    )
}

export default Button;