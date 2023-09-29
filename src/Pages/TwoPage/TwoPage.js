import React from "react";
import './TwoPage.css'

function TwoPage({textTwo, content, type, children, className}){
    let renderedContent;

    if (type === 'text') {
        renderedContent= <p>{content}</p>;
    } else if (type === 'img') {
        renderedContent = <img src={content} alt="Afbeelding" />;
    } else if (type === 'form') {
        renderedContent = <form>{content}</form>;
    } else if (type = 'component') {
        renderedContent = <div className='inner-text'>{content}</div>
    }
    else {
        renderedContent = <p>onbekend type inhoud</p>;
    }


    return (
        <div className='outer-two-page'>
            <div className={className}>
                <div className='two-page-text-1'>
                    {renderedContent}
                </div>
                <div className='two-page-text-2'>
                    <p>{textTwo}</p>
                    {children}
                </div>
            </div>
        </div>
    )
}
export default TwoPage;