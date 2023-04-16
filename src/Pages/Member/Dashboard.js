import axios from 'axios'
import Cookies from 'js-cookie';
import React, { useEffect } from 'react'
import './../../resources/css/dashboard.css';

function Dashboard() {

  useEffect(()=>{
   
 axios.get("http://192.168.100.3:8000/user/dashboard",{
  headers:{
    'auth':Cookies.get('token')
  }
 })
 .then(response=>{
  console.log(response);
 })
 .catch(error=>{
  console.log("error");
 });
  },[]);

  return (
    <>
      <div className='container' >
        <div className='box1'>
          <h1>BMI Calculator</h1>
          <form>
            <label>Weight</label>
            <input type='number'></input>
            <label>Height</label>
            <input type='number'></input>
            <button type='submit'>Calculate</button>
          </form>
          <span>your bmi is 2.5</span>
        </div>
        <div className='box2'>

        </div>
        <div className='box3'></div>
      </div>
    </>
  )
}

export default Dashboard