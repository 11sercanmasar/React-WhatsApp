import React from 'react'
import './login.css'
import { Button } from '@material-ui/core';
import { auth, provider } from '../../firebase';
function Login() {
const signIn = ()=>{
  auth.signInWithPopup(provider).then(result => console.log(result)).catch(error => alert(error.message))
}

  return (
    <div className='login'>
        <div className="loginWrapper">
            <img className='loginImg' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png" 
            alt=""
             />
            <div className="loginText">
              <h1>Sign in to Watsapp</h1>
            </div>
            <Button className="loginButton" type="submit" onClick={signIn}>
              Sign in with Google
            </Button>
        </div>
    </div>
  )
}

export default Login;