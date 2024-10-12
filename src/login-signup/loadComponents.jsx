import './style.css'

import Login from "./login";
import SignUp from "./signup";
import {useState} from 'react';

function LoadLogin_Signup() {

    const [login,setLogin] = useState(true);

    const handleLogin = (e)=>{
        // let login = document.getElementById('login');
        // let signup = document.getElementById('signup');

        // login.classList.add("active");
        // signup.classList.remove("active");

        setLogin(true);
    }

    const handleSignup = (e)=>{
        
        // let login = document.getElementById('login');
        // let signup = document.getElementById('signup');

        // login.classList.remove("active");
        // signup.classList.add("active");

        setLogin(false);
    }

  return (
      <div className="login-signup">
       
        <div className="twobutton">

           <button id='login' className={login?"active":""} onClick={(e)=>handleLogin(e)}>login</button>
           <button id='signup' className={!login?"active":""} onClick={(e)=>handleSignup(e)}>Signup</button>

        </div>

        {
            login ? <Login handleSignup={handleSignup}/> : <SignUp />
        }
        
      </div>
  )
}

export default LoadLogin_Signup;
