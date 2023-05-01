import React, { useEffect, useState } from 'react'
import '../../resources/css/viewbill.css'
import axios from 'axios'
import Cookies from 'js-cookie'

const Viewbill = () => {
const [payment, setPayment]= useState([]);
const [members, setMember]= useState([]);
const [packages, setPackage]= useState([]);
const [newarray, setnewarray]= useState([]);
const [total, setTotal]= useState(0);


    useEffect(()=>{
axios.get('/admin/bill',{
    headers:{
        'auth': Cookies.get('token')
    }

}).then(response=>{
    // console.log(response.data.bill);
    setPayment(response.data.bill);
    setMember(response.data.member);
    setPackage(response.data.package);
}).catch(error=>{
    console.log(error);
})
const total = payment.reduce((acc, amount)=>acc + amount.amount,0);
setTotal(total);
const newarray = payment.map(newdata =>{
  

    const user = members.find(members=>members.id === newdata.user_id);
    const pac = packages.find(packages=>packages.pac_id === newdata.package_id);
    return{

        username: user? user.name:"unknown",
        package: pac? pac.name:"unknown",
        medium:newdata.medium,
        rdate:newdata.renew_date,
        edate:newdata.expire_date,
        status:newdata.status,
        amount: newdata.amount
    };
})
// console.log(newarray);
setnewarray(newarray);
    },[newarray, members, packages, payment]);



  return (
    <>
    <div className='box'>
        <h1>Payment</h1>
        <h4>Total : Rs.{total}</h4>
        <table border="2px">
            <tr>
                <th>S.N</th>
                <th>Name</th>
                <th>Package</th>
                <th>medium</th>
                <th>renew data</th>
                <th>expire date</th>
                <th>status</th>
                <th>amount</th>
            </tr>


            {newarray.map((data,index)=>(
                    <tr key={data.bid}>
                    <td>{index +1}</td>


                    <td>{data.username}</td>
                    <td>{data.package}</td>
                    <td>{data.medium}</td>
                    <td>{data.rdate}</td>

                    <td>{data.edate}</td>
                    <td>{data.status}</td>
                    <td>{data.amount}</td>
                    </tr>
                    
                ))
            }
        </table>
    </div>
    </>
  )
}

export default Viewbill