import React from "react";
import './TwoPage.css'

function TwoPage({textOne, textTwo, image}){
    return (
        <div className='outer-two-page'>
            <div className='inner-two-page'>
                <div className='two-page-text-1'>
                    {textOne ? (
                        <p>{textOne}</p>
                    ) : (
                        <img src={image} alt="Image" />
                    )}
                </div>
                <div className='two-page-text-2'>
                    <p>{textTwo}</p>
                </div>

            </div>
        </div>
    )
}
export default TwoPage;