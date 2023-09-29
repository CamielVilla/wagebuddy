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
         <Chapter text='Praktijkvoorbeeld: Jonne'/>
         <TwoPage textOne='#1 Jonne zou met haar salaris op een verwacht verzamelinkomen uitkomen van €53.000 over 2023, op basis van 38 uur uur werken.
         #2 Ze was geïnteresseerd in een 38-urige baan met een salaris-range van €50.000 - €70.000.
#3 Een gemiddelde vrouw van haar leeftijd zou na de onderhandeling uitkomen op €59.000, wat voor Jonne ook voelde als een prima salaris. Normaal gesproken zou ze op dit salaris mikken.'
                  textTwo='#4 Ze besloot om met WageBuddy in zee te gaan,
                   die voor haar een salaris van €68.000 onderhandelde, ofwel €9.000 boven het verwachte salaris.
#  5 De 50% bonus voor WageBuddy kwam neer op €4.500, die Jonne nu in 12 termijnen €375 betaalt.
#6 Het resultaat voor Jonne is €4.500 over het eerste jaar,
en €9.000 over ieder jaar daarop. Bovendien heeft ze bij haar volgende job
switch een veel betere uitgangspositie.'
         />
         <TwoPage textTwo='Waarom ons vertrouwen?
Transparantie  We laten je precies zien hoe we tot onze schattingen komen
Geen verborgen kosten. Onze dienst is gratis voor jou.
We verdienen alleen als jij meer verdient. Jouw succes is ons succes
 We zijn gemotiveerd om het beste salaris voor je te onderhandelen.'
                  image={desk}
                  />
         <HowItWorks
             buttonId='scrollButton'
             buttonClassName='scrollButtonClass'
             text='aanmelden'
             onClick={scrollToForm}
         />
         <div className='form-container'>
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
             </form>
         </div>

     </>
  )
}

export default App;
