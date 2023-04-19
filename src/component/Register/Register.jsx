
import React from 'react';
import { useState } from 'react';
import{createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import app from '../../firebase/firebase.con';

const auth = getAuth (app);

const Register = () => {

   

    const handleEmailChange = (event) =>{
     
        setEmail(event.target.value);


    }

    const handlePasswordBlur = (event) =>{
    const [error, setError] = useState('')
     
    }

    const handleSunmit = (event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password =  event.target.password.value;
        console.log (email,password );
        createUserWithEmailAndPassword(auth, email, password)
        .then( result =>{
            const loggedUser = result.user;
        })
        .catch(error =>{
            console.log (error)
        })
      
        
        

    }


    return(
        <div>
            <h2>This is register page</h2>
            <form onSubmit={handleSunmit}>
                <input onChange={handleEmailChange} type="text" placeholder='Your Email' name='email' />
                <br />
                <input onBlur={handlePasswordBlur} type="password" placeholder='Your Password'name='password' />
                <br />
                <input type="submit" name="Register" id="" />
            </form>
        </div>
    );
};

export default Register;