
import './style.css'

import { useState } from 'react';

function ContactForm({addContact}) {


    let [contactData,setContactData] = useState({name:"",email:""});

    const handleInputData = (e)=>{
        e.preventDefault();
        setContactData( {...contactData , [e.target.name]:e.target.value} )
        
    }

    

    const handleAdd = (e)=>{
        e.preventDefault();

        if(contactData.name === "" || contactData.email === "")
        {
            alert("Please fill the Fields");
            return;
        }

        console.log(addContact(contactData));

        setContactData({name:"",email:""})
    }

  return (
    <form >

        <h1>Add Contact</h1>

        <div>
            <label >Name:</label>
            <input type="text" placeholder='Name' name='name' value={contactData.name} onChange={(e)=>{
                handleInputData(e);
            }} />
        </div>

        <div>
            <label >Email:</label>
            <input type="email" placeholder='Email' name='email' value={contactData.email} onChange={(e)=>{
                handleInputData(e);
            }} />
        </div>

        <button onClick={(e)=>{handleAdd(e)}}>Add</button>

    </form>
  )
}

export default ContactForm;
