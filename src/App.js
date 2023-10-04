import './App.css';
import React, {useState} from "react";
import Banner from "./Pages/mainpage/Banner";
import { useForm } from "react-hook-form"
import axios from "axios";
import Chapter from "./Pages/Chapter/Chapter";
import stars from '../src/assets/Sterren.png'
import ThreePage from "./Pages/ThreePage/ThreePage";
import HowItWorks from "./Pages/HowItWorks/HowItWorks";
import desk from '../src/assets/girlsdesk.jpg'
import guy from '../src/assets/board.jpg';
import WhyWageBuddy from "./Pages/Texts/WhyWageBuddy";
import Praktijkvoorbeeld from "./Pages/Texts/Praktijkvoorbeeld";
import WhyTrustUs from "./Pages/Texts/WhyTrustUs";
import './Pages/TwoPage/TwoPage.css'


function App() {
  const {register, handleSubmit, formState: {errors}} = useForm();
    const [addSucces, toggleAddSucces] = useState(false);
    const [loading, setLoading] = useState(false);

  function scrollToForm(){
      const form = document.getElementById('applyForm')

      form.scrollIntoView({ behavior: "smooth"})
  }

    async function handleFormSubmit(data){
        try{
            setLoading(true);
            const response = await axios.post("https://wagebuddy-f935672a2f3c.herokuapp.com/addemail",{
                name: data.naam,
                emailAddress: data.email,
                phone: data.tel,
            })
            if (response.data){
                toggleAddSucces(true);
                const emailField = document.getElementById("email");
                const nameField = document.getElementById("naam");
                const phoneField = document.getElementById("tel");
                emailField.value = "";
                nameField.value = "";
                phoneField.value = "";
                setLoading(false);
            }else{
                toggleAddSucces(false);
                setLoading(false);
            }
        }catch (data) {
            console.error(data);
            setLoading(false);
        }
    }
  return (
     <>
             <section>
                 <Banner
                     buttonId='scrollButton'
                     buttonClassName='white-button'
                     text='aanmelden'
                     onClick={scrollToForm}
                 />
                 <section className='section-divider'>
                     <Chapter
                         text='Sluit je aan bij 241 blije professionals'
                     >
                         <img alt='stars' className='stars' src={stars}/>
                     </Chapter>
                     <ThreePage/>
                 </section>
                 <section className='section-divider'>
                     <div className='outer-div-praktijkvoorbeeld'>
                         <div className='inner-div-praktijkvoorbeeld'>
                             <img alt='guy' src={guy} className='guy'/>
                             <WhyWageBuddy/>
                         </div>
                     </div>
                 </section>
                 <section className='section-divider'>
                     <Chapter text='Hoe werkt het?'/>
                     <HowItWorks
                         buttonId='scrollButton'
                         buttonClassName='scrollButtonClass'
                         text='aanmelden'
                         onClick={scrollToForm}
                     />
                 </section>
                 <section className='section-divider'>
                     <Chapter text='Praktijkvoorbeeld: Jonne'/>
                     <div className='outer-div-praktijkvoorbeeld'>
                         <div className='inner-div-praktijkvoorbeeld'>
                             <Praktijkvoorbeeld
                                 one='#1 Jonne zou bij voortzetting van haar huidige baan op een verwacht
                                 bruto verzamelinkomen uitkomen van
                                 €53.000 in 2023, op basis van 38 uur uur werken.'
                                 two='#2 Ze is geïnteresseerd in een 38-urige baan waarbij een salaris-range van €50.000 - €70.000 is aangegeven.'
                                 three='#3 Een gemiddelde professional met haar profiel zou na de
                                 onderhandeling ongeveer uitkomen op €59.000, wat voor Jonne ook voelt als
                                 een prima salaris.
                                 Normaal gesproken zou ze op dit salaris mikken.'
                             />
                             <Praktijkvoorbeeld
                                 one='#4 Ze besluit om met WageBuddy in zee te gaan, die voor haar een salaris van
                                 €68.000 onderhandelt, ofwel €9.000 boven het verwachte salaris.'
                                 two='#5 De 33% bonus voor WageBuddy komt inclusief BTW neer op €3.630 die Jonne in 12 termijnen €302,50 betaalt.'
                                 three='#6 Het eerste jaar houdt Jonne netto ongeveer €2.300 meer over dan ze normaal gesproken zou doen. Daarna is dit ongeveer €5.900 per jaar.
                                 Bovendien heeft ze bij haar volgende job switch een veel betere uitgangspositie.'
                             />
                         </div>
                     </div>
                 </section>
                 <section className='section-divider'>
                     <div className='outer-div-praktijkvoorbeeld'>
                         <div className='inner-div-praktijkvoorbeeld'>
                             <WhyTrustUs/>
                             <img alt='desk' className='desk' src={desk}/>
                         </div>
                     </div>
                 </section>
                 <div className='outer-bottom'>
                     <div className='inner-bottom'>
                         <form className='inner-bottom-form' id='applyForm' onSubmit={handleSubmit(handleFormSubmit)}>
                             <h2>Aanmelden</h2>
                             <input
                                 id="naam"
                                 type="naam"
                                 placeholder="volledige naam"
                                 {...register("naam",
                                     {
                                         required: {
                                             value: true,
                                             message: 'vul je naam in',
                                         },
                                         maxLength: {
                                             value: 50,
                                             message: "vul maximaal 50 karakters in",
                                         }
                                     })}
                             />
                             {errors.naam && <p>{errors.naam.message}</p>}
                             <input
                                 id="email"
                                 type="email"
                                 placeholder="e-mail"
                                 {...register("email",
                                     {
                                         required: {
                                             value: true,
                                             message: 'vul je e-mail adres in',
                                         },
                                         maxLength: {
                                             value: 50,
                                             message: "vul maximaal 50 karakters in",
                                         }
                                     })}
                             />
                             {errors.email && <p>{errors.email.message}</p>}
                             <input
                                 id="tel"
                                 type="tel"
                                 placeholder="telefoonnummer"
                                 {...register("tel",
                                     {
                                         required: {
                                             value: true,
                                             message: 'vul je telefoonnummer in',
                                         },
                                         maxLength: {
                                             value: 15,
                                             message: "vul maximaal 15 karakters in",
                                         }
                                     })}
                             />
                             {errors.tel && <p>{errors.tel.message}</p>}
                             {loading ? (
                                     <div className="spinner"></div>
                             ) : addSucces ? (
                                 <h4>Je aanmelding is geslaagd.</h4>
                             ) : (
                                 <button type="submit">Verzenden</button>
                             )}


                             <h4>Wij proberen dezelfde werkdag nog contact met je op te nemen.</h4>
                             {/*{addSucces && <p className='thanks'>Je aanmelding is geslaagd!</p>}*/}
                         </form>
                         <div className='inner-bottom-text'>
                             <div className='title'>
                                 <h2>
                                     Voorwaarden
                                     <br/><br/>
                                 </h2>
                             </div>
                             <ul>
                                 <li>Je hebt minimaal 3 jaar werkervaring.
                                 </li>
                                 <br/>
                                 <li>Je kunt aantonen dat je bij voortzetting van je huidige functie in 2023 tenminste zou uitkomen op
                                     een verzamelinkomen van €45.000 bij 38 uur per week.
                                 </li>
                                 <br/>
                                 <li>Je solliciteert op banen in Nederland.
                                 </li>
                             </ul>
                         </div>
                     </div>
                 </div>
             </section>
     </>
  )
}

export default App;
