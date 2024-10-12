import { useEffect, useState } from "react";
import ContactForm from "./contactForm"
import ShowContact from "./showContact";



function LoadContactComponents() {

    const localStorageKey = "contact";

    const [contact,setContact] = useState(()=>{
        return JSON.parse(localStorage.getItem(localStorageKey)) || []
    });


    useEffect(()=>{
        localStorage.setItem(localStorageKey,JSON.stringify(contact))
    })

    const addContact = (data)=>{
        setContact([...contact , data]);
    }

  return (
    <>
       <ContactForm addContact ={addContact} />

       <ShowContact data = {contact} />
    </>
  )
}

export default LoadContactComponents;
