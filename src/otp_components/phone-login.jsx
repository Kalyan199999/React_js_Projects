import { useState } from "react"

import Otp from './otp';


function PhoneLogin() {

    let [mobile ,setMobile]  = useState("");
    const [showOtp , setOtp] = useState(false);

    const handleChange = (e)=>{
        e.preventDefault();
        setMobile(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        // Phone Validation
        const regex = /[^0-9]/g;

        if(mobile.length !== 10 || regex.test(mobile))
        {
            alert("Enter the Valid mobile!")
            return;
        }
        
        setOtp(true);
    }

    const onSubmit = (otp)=>{
        console.log(otp);
        console.log("Login successfull!");
        
    }



  return (
    <>
       {
         !showOtp ? 
         
         <form onSubmit={(e)=>{handleSubmit(e)}}>
        
         <input type="text" placeholder='phone number' name="mobile" value={mobile} onChange={(e)=>{handleChange(e)}} />
 
         <button >Submit</button>
 
         </form> : <Otp mobile={mobile} onSubmit = {onSubmit} />
       }
    
    </>
  )
}

export default PhoneLogin
