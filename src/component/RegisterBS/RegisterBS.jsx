
import React from 'react';



const RegisterBS = () => {

    const handleRegister =(event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log (email,password)
    
    
    }

    return (
        <div className='w-50 mx-auto mt-5'>

            <h1>Please fill up from</h1>
            <form onSubmit={handleRegister}>
  <div className="mb-3">
    <label className='' for="exampleInputEmail1" ></label>

    <input className='w-50' type="email" name='email'  id="exampleInputEmail1" placeholder='Please type your email' aria-describedby="emailHelp"/>
   
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label"></label>
    <input className='w-50'placeholder='Type your password'  type="password" name='password'  id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox"  className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
    );
};

export default RegisterBS;