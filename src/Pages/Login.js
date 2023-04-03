import React from 'react'
import './../resources/css/login.css'
import {Navigate} from 'react-router'
 
function Login() {


  return (
    <>
  <div className='form'>
    <form>
      <div className='label'>
        <label>Phone Number:</label>
        <label>Passowrd</label>
      </div>
      <div className='input'>
      <input type='text' name='phone' id='name'></input>
    <input type="password" name='password' id='password'></input>
     
      </div>
      <button onClick={user}>Send</button>
    </form>

  </div>
    </>
  )
}
const user=(event)=>{

  <Navigate to='/'></Navigate>
  
  event.preventDefault();

alert("hello");
}


  

export default Login