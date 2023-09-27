import React from "react";
import './MainPage.css'
import '../../assets/banner.jpg'
import Button from "../../Reusables/Button/Button";

function MainPage({text, onClick, buttonId, buttonClassName}){
    return (
        <div className='outer-border'>
            <div className='inner-border'>
                <div className='text-1'>
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

export default MainPage;