import React from "react";

function Praktijkvoorbeeld({one, two, three}){
    return (
        <div className='outer-div'>
        <div className='inner-div'>
            <p>{one}</p>
        <br/><br/>
            <p>{two}</p>
            <br/><br/>
            <p>{three}</p>
            <br/><br/>
        </div>
        </div>
    )
}

export default Praktijkvoorbeeld;