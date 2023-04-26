import React,{useEffect, useState} from 'react'
import '../../resources/css/fee.css'
import KhaltiCheckout from "khalti-checkout-web";
import axios from 'axios';
import Cookies from 'js-cookie';
import { json } from 'react-router-dom';



function Fee() {
  useEffect(()=>{
    axios.get("http://192.168.100.3:8000/user/fee",{
      headers:{
        'auth':Cookies.get('token')
      }
    })
    .then(response =>{
      const data = response.data[0];
      console.log(data.name);
      document.getElementById('package_name').textContent = data.name;
      document.getElementById('renew_data').textContent = data.renew_date;
      document.getElementById('expire_data').textContent = data.expire_date;
      
    })
    .catch(error =>{
      console.log("error");
    })
  },[]);
  
  const[pacname, setPacName]= useState("0");

  const value =(event)=>{
    setPacName(event.target.form.package.value);
  };

  let config = {
    // replace this key with yours
    "publicKey": "test_public_key_99697f8fd7fc41e8b922cb5f84cf4e82",
    "productIdentity": "1234567890",
    "productName": pacname,
    "productUrl": "http://gameofthrones.com/buy/Dragons",
    "eventHandler": {
        onSuccess (payload) {
            // hit merchant api for initiating verfication
            console.log(payload);
        },
        // onError handler is optional
        onError (error) {
            // handle errors
            console.log(error);
        },
        onClose () {
            console.log('widget is closing');
        }
    },
    "paymentPreference": ["KHALTI","MOBILE_BANKING"],
};



  
let checkout = new KhaltiCheckout(config);

function check(event){
  event.preventDefault();

if(pacname === "0"){
  alert("please select package");
  console.log("invalid");

}
else{
  console.log(pacname);

  checkout.show({amount: 1000});
}
}


  return (
    <>
    <div className='box'>
    <div className='fee'>
      <h1>Fee Details</h1>
      <div className='details'>
        <table border={"2px"}>
          <tr>
            <td>Name</td>
            <td>Roshan</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>9865354145</td>
          </tr>
          <tr>
            <td>Package</td>
            <td id='package_name'>one Month</td>
          </tr>
          <tr>
          <td>Renew Date</td>
          <td id='renew_data'>2023-04-16</td>
          </tr>
          <tr>
            <td>Expire Date</td>
            <td id='expire_data'>2023-05-16</td>
          </tr>
        </table>
      </div>

        <h3>4 days remaining to expire</h3>
        <h2>Renew</h2>

        <form>
          <select id='package' onChange={value}>
          <option value={0} selected>Select Package</option>
            <option value={1}>One month</option>
            <option value={2}>Six months</option>
            <option value={3}>Twelve months</option>
          </select>
          <button >COD</button>
          <button onClick={check}>Khalti</button>
        </form>
    </div>
    <div className='package'>
      <h1>Packages</h1>
      <table border={"2px"}>
        <tr>
          <th>S.N</th>
          <th>Package Name</th>
          <th>Amount</th>
        </tr>
        <tr>
          <td>1</td>
          <td>One Month</td>
          <td>Rs.1000</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Six Month</td>
          <td>Rs.5000</td>
        </tr>
        <tr>
          <td>3</td>
          <td>One year</td>
          <td>Rs.10000</td>
        </tr>
        <tr>
          <td>4</td>
          <td>new year offer(two month)</td>
          <td>Rs.1500</td>
        </tr>
      </table>
    </div>
    </div>
    </>
  )
}

export default Fee