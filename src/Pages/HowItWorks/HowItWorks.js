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
                        Deel je huidige verwachte verzamelinkomen* en
                        (indien al van toepassing)
                        de vacature(s) waarin/waarvoor je geïnteresseerd/benaderd bent.
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
                        delen we 50/50* gedurende twaalf maanden.
                        <br/><br/><br/></p>
                    <h5>*Onze fee wordt altijd berekend o.b.v. 38 uur.
                        Bijv. als je 32 uur werkt is onze
                        fee 54% van wat je daadwerkelijk extra verdient</h5>
                </div>
            </div>
        </div>

    )
}

export default HowItWorks;