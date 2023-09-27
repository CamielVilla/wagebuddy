import React from "react";
import './Chapter.css'

function Chapter({text, children}){
    return(
                <div className='outer-chapter'>
            <div className='inner-chapter'>
                <h3>Sluit je aan bij <u>2</u>4<u>1</u> blije professionals</h3>
                {children}
            </div>
        </div>
    )
}

export default Chapter;