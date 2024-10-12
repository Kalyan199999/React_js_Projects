

function SignUp() {
  return (
    <form className='form'>
           <h1>Sign-Up Form</h1>
           <div>
              <label >Email</label>
              <input type="email" name="email" id="email" placeholder='Email' />
           </div>

           <div>
              <label >Password</label>
              <input type="password" name="password" id="password" placeholder='Password' />
           </div>

           <div>
              <label >Conform Password</label>
              <input type="password" name="password" id="conform-password" placeholder='Conform Password' />
           </div>

           <button>Sign up</button>

      </form>
  )
}

export default SignUp;
