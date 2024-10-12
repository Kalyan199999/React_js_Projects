

function Login({handleSignup}) {
    
  return (

      <form className='form'>
           <h1>Login Form</h1>
           <div>
               <label >Email</label>
               <input type="email" name="email" id="email" placeholder='Email' />
           </div>

           <div>
               <label >Password</label>
               <input type="password" name="password" id="password" placeholder='Password' />
           </div>

           <a href="#">Forget Password</a>


           <button>Login</button>

           <p>Not a Member? <a href="#" onClick={(e)=>{handleSignup(e)}}>SignUp Now</a> </p> 

      </form>
  )
}

export default Login
