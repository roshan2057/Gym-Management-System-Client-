import axios from 'axios';
import React from 'react'

const Register = () => {

    const callApi=(event)=>{
        event.preventDefault();
 const name= event.target.name.value;
 const phone = event.target.phone.value;
 const password= event.target.password.value;
 const address = event.target.address.value;
 axios.post("http://192.168.100.3:8000/user/register",{
    name,
    phone,
    password,
    address
 }).then(response=>{

    console.log(response);

    if(response.status === 200 || response.status ===201){

        alert("data inserted and your id is: "+response.data.id);
        event.target.name.reset();

    }
 }).catch((error)=>{
    console.log(error);
 })
    }


  return (<>
    <div className='form'>
        <form onSubmit={callApi}>
            <div className='label'>
                <label>Name</label>
                <label>Phone</label>
                <label>Password</label>
                <label>Address</label>
            </div>
            <div className='input'>
                <input type='text' name='name' id='name'></input>
                <input type='number' name='phone' id='phone' ></input>
                <input type= 'passowrd' name= 'password' id= 'password'></input>
                <input type='text' name='address' id='address'></input>
            </div>
            <button type='submit'>Register</button>
        </form>

    </div>
  
  
  </>
  )
}

export default Register