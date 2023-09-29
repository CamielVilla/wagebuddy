import React from "react";
import './Chapter.css'

function Chapter({text, children}){
    return(
                <div className='outer-chapter'>
            <div className='inner-chapter'>
                <h3>{text}</h3>
                {children}
            </div>
        </div>
    )
}

export default Chapter;