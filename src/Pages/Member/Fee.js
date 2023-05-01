import React,{useEffect} from 'react'
import '../../resources/css/fee.css'
import axios from 'axios';
import Cookies from 'js-cookie';
import Renew from '../../components/Renew';



function Fee() {


  useEffect(()=>{

    async function fetchdata(){
     
      await axios.get("/user/fee",{
        headers:{
          'auth':Cookies.get('token')
        }
      })
      .then(response =>{
        const bill = response.data.bill[0];
        const user = response.data.user[0];
        // console.log(bill);
  
        const dateexpire =new Date(bill.expire_date);
  
        const today =new Date();
        const diff = dateexpire.getTime() - today.getTime();
        const rem = Math.floor(diff/(1000 *60*60*24));
        (rem>0)?document.getElementById('remaining').textContent = rem+" days remaining to expire":
        document.getElementById('remaining').textContent = "Expired!! Please Renew from below";
  
  
  
        
        document.getElementById('package_name').textContent = bill.name;
        document.getElementById('renew_data').textContent = bill.renew_date;
        document.getElementById('expire_data').textContent = bill.expire_date;
        document.getElementById('status').textContent = bill.status;
        document.getElementById('name').textContent = user.name;
        document.getElementById('phone').textContent = user.phone;
  
        
      })
      .catch(error =>{
        console.log(error);
        document.getElementById('phone').textContent = "no data";
  
      })
    }
fetchdata();
    
  },[]);


  return (
    <>
    <div className='boxfee'>
    <div className='fee'>
      <h1>Fee Details</h1>
      <div className='details'>
        <table border={"2px"}>
          <tr>
            <td>Name</td>
            <td id='name'>Server off</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td id='phone'>9865354145</td>
          </tr>
          <tr>
            <td>Package</td>
            <td id='package_name'>one Month</td>
          </tr>
          <tr>
            <td>Status</td>
            <td id='status'>paid</td>
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

        <h3 id='remaining'>Please do the 1st transection</h3>
        <Renew/>

        
    </div>
    </div>

    </>



  )

  

}
export default Fee