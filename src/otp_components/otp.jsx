import React, { useEffect, useRef, useState } from 'react'

function Otp({mobile,onSubmit }) {
  

    const [otp , setOtp] = useState(new Array(4).fill(""));

    const inputRef = useRef([]);

    useEffect(()=>{

      if(inputRef.current[0])
      {
        inputRef.current[0].focus();
      }

    },[])

    const handleChange = (e,idx)=>{
      
      const val =  e.target.value;

      // Check whether the value is number or not
      if(isNaN(val))
      {
        return;
      }

      const newOtp = [...otp];

      // take only 1 char
      newOtp[idx] = val.substring(val.length-1);
      setOtp(newOtp);

      if(val && idx < 3 && inputRef.current[idx+1])
      {
        inputRef.current[idx+1].focus();
      }
      
    }

    const handleClick = (idx)=>{

      // select the entire text for latest entry
      inputRef.current[idx].setSelectionRange(1,1);

      // find the first empty input box
      if(idx>0 && otp[idx-1] !== "")
      {
        inputRef.current[otp.indexOf("")].focus();
      }

    }

    const handleKeyDown = (e,idx)=>{

      // Move to the previous fields
      if(e.key === "Backspace" && idx>0 && !otp[idx] && inputRef.current[idx-1])
      {
        inputRef.current[idx-1].focus();
      }

    }

    const handleVerify = (e)=>{

      // join the array of all chars
      const combinedOtp = otp.join("");

      // if the length is four then submit
      if(combinedOtp.length === 4)
      {
        onSubmit(combinedOtp);
      }

    }
    
  return (
    <div className='parent'>

        <h2>{`OTP Send to ${mobile}`}</h2>
        <h2>Verify OTP</h2>

        <div className='child'>
        {
          otp.map((val,idx)=>{
            return(
              <input type="text" key={idx} value={val} onChange={(e)=>{handleChange(e,idx)}} onClick={()=>{handleClick(idx)}} onKeyDown={(e)=>{handleKeyDown(e,idx)}}  ref={(input)=>{inputRef.current[idx] = input}}/>
            )
          })
        }
        </div>

        <button onClick={(e)=>{handleVerify(e)}}>Verify</button>
      
    </div>
  )
}

export default Otp
