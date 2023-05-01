import axios from 'axios';
import Cookies from 'js-cookie';
import KhaltiCheckout from 'khalti-checkout-web';
import React, { useEffect, useState } from 'react'

const Renew = () => {
  const [packages, setPackages] = useState([]);
  const [pacname, setPacName] = useState("0");



  useEffect(() => {

    axios.get("/user/viewpackage", {
      headers: {
        'auth': Cookies.get('token')
      }
    })
      .then(response => {

        setPackages(response.data.package);


      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  const selectpackage = packages.map((pacdata, index) => (
    <option value={pacdata.pac_id}>{pacdata.name}</option>
  ));

  const value = (event) => {
    setPacName(event.target.form.package.value);
  };

  let config = {
    // replace this key with yours
    "publicKey": "test_public_key_99697f8fd7fc41e8b922cb5f84cf4e82",
    // "productIdentity": userid,
    "productIdentity": "22",
    "productName": pacname,
    "productUrl": "http://gameofthrones.com/buy/Dragons",
    "eventHandler": {
      onSuccess(payload) {
        // hit merchant api for initiating verfication
        console.log(payload);
        async function khalicall() {
          axios.post("/user/payment", payload, {
            headers: {
              'auth': Cookies.get('token')
            }
          })
            .then(response => {
              console.log(response);
            })
            .catch(error => {
              console.log(error);
            })
        }
        khalicall();

      },
      // onError handler is optional
      onError(error) {
        // handle errors
        console.log(error);
      },
      onClose() {
        console.log('widget is closing');
      }
    },
    "paymentPreference": ["KHALTI", "MOBILE_BANKING"],
  };


  let checkout = new KhaltiCheckout(config);

  function check(event) {
    event.preventDefault();

    if (pacname === "0") {
      alert("please select package");
      console.log("invalid");

    }
    else {
      console.log(pacname);

      // checkout.show({amount: pacname*100});
      checkout.show({ amount: 1000 });
    }
  }


  const rowdata = packages.map((pacdata,index)=>(
    <tr key={pacdata.pac_id}>
      <td>{index+1}</td>
      <td>{pacdata.name}</td>
      <td>Rs.{pacdata.price}</td>
    </tr>
          ));
  return (
    <div> 
      <div className='left'>
      <h2>Renew</h2>
      <form>
        <select id='package' onChange={value}>
          <option value={0}>Select Package</option>
          {selectpackage}
        </select>
        <button >COD</button>
        <button onClick={check}>Khalti</button>
      </form>
    </div>
<div className='right'>
<h1>Packages</h1>
      <table border={"2px"}>
        
          <tr>
            <th>S.N</th>
            <th>Package Name</th>
            <th>Amount</th>
          </tr>
      
          {rowdata}

      </table>
</div>

    </div>
  )
}

export default Renew