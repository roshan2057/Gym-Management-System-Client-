import React from 'react'
import './../resources/css/login.css'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import Cookies from 'js-cookie';

 
function Login() {
let navigate= useNavigate();
 
  const callApi=(event)=>{
    event.preventDefault();
  const phone =event.target.phone.value;
  const password = event.target.password.value;
  axios.post("http://192.168.100.3:8000/data",{
    phone,
    password
  }).then(response=>{
    console.log(response.data)
    Cookies.set('logged','true');
    return navigate("/user");
    
  
  }).catch((error)=>{
    console.log(error);
  });   
   
    }
    

  

  return (
    <>
  <div className='form'>
    <form onSubmit={callApi}>
      <div className='label'>
        <label>Phone Number:</label>
        <label>Passowrd</label>
      </div>
      <div className='input'>
      <input type='text' name='phone' id='phone'></input>
    <input type="password" name='password' id='password'></input>
     
      </div>
      <button type="submit">Send</button>
    </form>
   
  </div>
    </>
  ) 
}





export default Login