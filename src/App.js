import './App.css';
import React, {useState} from "react";
import Banner from "./Pages/mainpage/Banner";
import { useForm } from "react-hook-form"
import axios from "axios";
import Chapter from "./Pages/Chapter/Chapter";
import stars from '../src/assets/Sterren.png'
import ThreePage from "./Pages/ThreePage/ThreePage";
import HowItWorks from "./Pages/HowItWorks/HowItWorks";
import TwoPage from "./Pages/TwoPage/TwoPage";
import desk from '../src/assets/girlsdesk.jpg'
import guy from '../src/assets/board.jpg';
import Button from "./Reusables/Button/Button";
import WhyWageBuddy from "./Pages/Texts/WhyWageBuddy";
import Praktijkvoorbeeld from "./Pages/Texts/Praktijkvoorbeeld";


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
            const response = await axios.post("https://thelastages.herokuapp.com/addemail",{
                emailAddress: data.email,
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
    <Banner
    buttonId='scrollButton'
    buttonClassName='scrollButtonClass'
    text='aanmelden'
    onClick={scrollToForm}
    />
         <Chapter
         text='Sluit je aan bij 241 blije professionals'
         >
             <img className='star-image' src={stars}/>
         </Chapter>
         <ThreePage/>
         <TwoPage type='img' content={guy}
                  className='inner-two-page-reversed'
         textTwo=''>
             <WhyWageBuddy/>
             <Button onClick={scrollToForm} text='aanmelden'/></TwoPage>
         <Chapter text='Hoe werkt het?'/>
         <HowItWorks
             buttonId='scrollButton'
             buttonClassName='scrollButtonClass'
             text='aanmelden'
             onClick={scrollToForm}
         />
         <Chapter text='Praktijkvoorbeeld: Jonne'/>
         <TwoPage
             className='inner-two-page'
             type='component' content={<Praktijkvoorbeeld
             one='#4 Ze besloot om met WageBuddy in zee te gaan, die voor haar een salaris van €68.000 onderhandelde, ofwel €9.000 boven het verwachte salaris.'
            two='#5 De 50% bonus voor WageBuddy kwam neer op €4.500, die Jonne nu in 12 termijnen €375 betaalt.'
             three='#6 Het resultaat voor Jonne is €4.500 over het eerste jaar, en €9.000 over ieder jaar daarop. Bovendien heeft ze bij haar volgende job switch een veel betere uitgangspositie.'
         />}
         ><Praktijkvoorbeeld one='#1 Jonne zou met haar salaris op een
         verwacht verzamelinkomen uitkomen van €53.000 over 2023, op basis van
         38 uur uur werken.'
         two='#2 Ze was geïnteresseerd in een 38-urige baan met een salaris-range van €50.000 - €70.000.'
         three='#3 Een gemiddelde vrouw van haar leeftijd zou na de onderhandeling uitkomen op €59.000, wat voor Jonne ook voelde als een prima salaris.
         Normaal gesproken zou ze op dit salaris mikken.'
         /></TwoPage>
         <TwoPage
             className='inner-two-page'
             type='img' content={desk} textTwo='Waarom ons vertrouwen?
    Transparantie  We laten je precies zien hoe we tot onze schattingen komen
Geen verborgen kosten. Onze dienst is gratis voor jou.
We verdienen alleen als jij meer verdient. Jouw succes is ons succes
 We zijn gemotiveerd om het beste salaris voor je te onderhandelen.'
                  />
         <TwoPage className='inner-two-page-reversed'

             textTwo='Voorwaarden

                  Je hebt minimaal 3 jaar werkervaring
         Je kunt aantonen dat je in je huidige functie in 2023 tenminste zal uitkomen op een verzamelinkomen van €45.000 (o.b.v. 38 uur)
         Je solliciteert op banen in Nederland'
                  type='form' content={
             <form id='applyForm' onSubmit={handleSubmit(handleFormSubmit)}>
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
                     id="telefoon"
                     type="telefoon"
                     placeholder="telefoonnummer"
                     {...register("telefoon",
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
                 {errors.naam && <p>{errors.naam.message}</p>}
                 {errors.email && <p>{errors.email.message}</p>}
                 {errors.telefoon && <p>{errors.telefoon.message}</p>}
                 {addSucces && <p className='thanks'>Je aanmelding is geslaagd!</p>}
                 {duplicate && <h4>je e-mail adres is al bekend bij ons</h4>}
             </form>}
         />
     </>
  )
}

export default App;
