import React from "react";
import './HowItWorks.css'
import Button from "../../Reusables/Button/Button";

function HowItWorks({text, onClick, buttonId, buttonClassName}){
    return(
        <div className='outer-how-it-works'>
            <div className='inner-how-it-works'>
                <div className='hiwTextOne'>
                    <p>#1 Intakegesprek
                    <br/><br/>
                        Ben je op zoek naar werk, heb je iets op het oog,
                        ben je al in gesprek met bedrijven of word je helemaal gek van recruiters die je stalken?
                        We bespreken het in een kort telefoongesprek.
                        <br/><br/><br/>
                    </p>
                    <h5>*Minimaal €45.000 o.b.v. 38 uur</h5>
                </div>
                <div className='hiwTextTwo'>
                    <p>#2 Onderhandeling
                        <br/><br/>
                        We maken samen met jou een inschatting van wat je
                        normaal zou verdienen en onderhandelen voor een
                        nog beter salaris
                        <br/><br/><br/>
                    </p>
                    <Button onClick={onClick} id={buttonId} className={buttonClassName} text={text}/>
                </div>
                <div className='hiwTextThree'>
                    <p>#3 Succes delen
                        <br/><br/>
                        Alles wat we bovenop je geschatte salaris onderhandelen,
                        delen we 67/33* gedurende twaalf maanden.
                        <br/><br/><br/></p>
                    <h5>*Onze fee is exclusief BTW en wordt altijd berekend alsof
                        je 38 uur werkt.</h5>
                </div>
            </div>
        </div>

    )
}

export default HowItWorks;