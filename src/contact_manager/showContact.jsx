import React from 'react'
import './style.css'

import { useState } from 'react'

function ShowContact({data}) {

    const [contactData,setContact] = useState(data);

    // console.log(data);
    // console.log(contactData);

    const handleDelete = (e,idx)=>{

        e.preventDefault();

        let d = contactData.filter((obj)=>{
            return obj !== contactData[idx]
        })
        console.log(d);
        
        setContact(d);
    }

  return (
    <>
      <h1>Contact List</h1>

      {
        contactData  && contactData.map((obj,idx)=>{
            return(
                <ul key={idx}>
                    <li>{obj.name.toUpperCase()}</li>
                    <li>{obj.email.toUpperCase()}</li>
                    <button onClick={(e)=>{handleDelete(e,idx)}}>🗑</button>
                </ul>
            )
        })
      }
      
    </>
  )
}

export default ShowContact;
