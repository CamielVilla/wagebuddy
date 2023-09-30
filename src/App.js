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
    const [duplicate, toggleDuplicate] = useState(false);
    const [loading, setLoading] = useState(false);

  function scrollToForm(){
      const form = document.getElementById('applyForm')

      form.scrollIntoView({ behavior: "smooth"})
  }

    async function handleFormSubmit(data){
        try{
            setLoading(true);
            const response = await axios.post("https://wagebuddy-f935672a2f3c.herokuapp.com/addemail",{
                name: data.name,
                emailAddress: data.email,
                phone: data.tel,
            })

            if (response.data){
                toggleDuplicate(false);
                toggleAddSucces(true);
                const emailField = document.getElementById("email");
                emailField.value = "";
                setLoading(false);
            }else{
                toggleAddSucces(false);
                toggleDuplicate(true);
                setLoading(false);
            }
        }catch (data) {
            console.error(data);
            setLoading(false);
        }
    }
  return (
     <>
         {loading ?
             <div className="loader-container">
                 <div className="spinner"></div>
             </div> :
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
                     </div></div>
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
                     one='#1 Jonne zou met haar salaris op een
                     verwacht verzamelinkomen uitkomen van €53.000 over 2023, op basis van
                     38 uur uur werken.'
                     two='#2 Ze was geïnteresseerd in een 38-urige baan met een salaris-range van €50.000 - €70.000.'
                     three='#3 Een gemiddelde vrouw van haar leeftijd zou na de onderhandeling uitkomen op €59.000, wat voor Jonne ook voelde als een prima salaris.
                    Normaal gesproken zou ze op dit salaris mikken.'
                 />
                 <Praktijkvoorbeeld
                     one='#4 Ze besloot om met WageBuddy in zee te gaan, die voor haar een salaris van €68.000 onderhandelde, ofwel €9.000 boven het verwachte salaris.'
                     two='#5 De 50% bonus voor WageBuddy kwam neer op €4.500, die Jonne nu in 12 termijnen €375 betaalt.'
                     three='#6 Het resultaat voor Jonne is €4.500 over het eerste jaar, en €9.000 over ieder jaar daarop. Bovendien heeft ze bij haar volgende job switch een veel betere uitgangspositie.'
                 />
             </div>
         </div>
                 </section>
                 <section className='section-divider'>
                 <div className='outer-div-praktijkvoorbeeld'>
                     <div className='inner-div-praktijkvoorbeeld'>
                         <WhyTrustUs/>
                         <img alt='desk' className='desk' src={desk}/>
                     </div></div>
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
                             {required: {
                                     value: true,
                                     message: 'vul je naam in',
                                 },
                                 maxLength: {
                                     value: 50,
                                     message: "vul maximaal 50 karakters in",
                                 }
                             })}
                     />
                     <input
                         id="email"
                         type="email"
                         placeholder="e-mail"
                         {...register("email",
                             {required: {
                                     value: true,
                                     message: 'vul je e-mail adres in',
                                 },
                                 maxLength: {
                                     value: 50,
                                     message: "vul maximaal 50 karakters in",
                                 }
                             })}
                     />
                     <input
                         id="tel"
                         type="tel"
                         placeholder="telefoonnummer"
                         {...register("tel",
                             {required: {
                                     value: true,
                                     message: 'vul je telefoonnummer in',
                                 },
                                 maxLength: {
                                     value: 15,
                                     message: "vul maximaal 15 karakters in",
                                 }
                             })}
                     />
                     <button type='submit'>Verzenden</button>
                     <h4>Wij nemen dezelfde werkdag nog contact met je op!</h4>
                     {errors.naam && <p>{errors.naam.message}</p>}
                     {errors.email && <p>{errors.email.message}</p>}
                     {errors.telefoon && <p>{errors.telefoon.message}</p>}
                     {addSucces && <p className='thanks'>Je aanmelding is geslaagd!</p>}
                     {duplicate && <h4>je e-mail adres is al bekend bij ons</h4>}
                 </form>
                 <div className='inner-bottom-text'>
                     <div className='title'>
                     <h2>
                         Voorwaarden
                         <br/><br/>
                     </h2>
                     </div>
                     <ul>
                         <li>Je hebt minimaal 3 jaar werkervaring
                         </li><br/>
                         <li>Je kunt aantonen dat je in je huidige functie in 2023 tenminste zal uitkomen op een verzamelinkomen van €45.000 (o.b.v. 38 uur)
                         </li><br/>
                         <li>Je solliciteert op banen in Nederland
                         </li>
                     </ul>
                 </div>
             </div>
         </div>
             </section>}
     </>
  )
}

export default App;
