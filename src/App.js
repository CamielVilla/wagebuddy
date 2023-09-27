import './App.css';
import React, {useState} from "react";
import MainPage from "./Pages/mainpage/MainPage";
import { useForm } from "react-hook-form"
import axios from "axios";


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
    <MainPage
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
