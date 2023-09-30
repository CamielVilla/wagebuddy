import React from "react";
import './Banner.css'
import '../../assets/banner.jpg'
import Button from "../../Reusables/Button/Button";

function Banner({text, onClick, buttonId, buttonClassName}){
    return (
        <div className='outer-border'>
            <div className='inner-border'>
                <div className='text-1'>
                    <br/><br/><br/><br/>
                    <h1>WageBuddy®</h1>
                    <h2>Wij vechten voor jouw salaris!</h2>
                    <Button onClick={onClick} id={buttonId} className={buttonClassName} text={text}/>
                </div>
                {/*<div className='text-2'>*/}

                {/*</div>*/}
                {/*<div className='text-3'>*/}
                {/*</div>*/}
                {/*<div />*/}
            </div>
        </div>
    )
}

export default Banner;