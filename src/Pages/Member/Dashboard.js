import axios from 'axios'
import Cookies from 'js-cookie';
import React, { useEffect } from 'react'
import './../../resources/css/dashboard.css';

function Dashboard() {

  useEffect(() => {

    axios.get("http://192.168.100.3:8000/user/dashboard", {
      headers: {
        'auth': Cookies.get('token')
      }
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log("error");
      });
  }, []);

  const check = (event) => {
    event.preventDefault();
    let wt = event.target.weight.value;
    let ht = event.target.height.value;
    // console.log(weight, height);

    var result = document.getElementById("bmiresult");
    result.style.padding='10px';


    if (wt === ' ' || ht === '') {

      result.innerHTML = "Please <br>Enter Weight and Height ";

    }
    else {
      ht = ht / 100;
      const bmi = wt / (ht ** 2);
      if (bmi < 18.5) {
        result.innerHTML = bmi.toFixed(1) + "BMI <br>Your are Under weight ";
      }

      else if (bmi > 18.5 && bmi < 25.0) {
        result.innerHTML = bmi.toFixed(1) + "  BMI <br>Your are Normal";

      }
      else if (bmi > 25.0 && bmi < 40.0) {
        result.innerHTML = bmi.toFixed(1) + "  BMI <br>Your are Over Weight";

      }
      else {
        result.innerHTML = "  Invalid <br>Weight and Height";

      }
    }




  }

  return (
    <>
      <div className='container' >
        <div className='box1'>
          <h1>BMI Calculator</h1>
          <form onSubmit={check}>
            <label>Weight</label>
            <input type='number' name='weight' placeholder='kg'></input>
            <label>Height</label>
            <input type='number' name='height' placeholder='cm'></input>
            <button type='submit'>Calculate</button>
            <p id='bmiresult'></p>

          </form>
        </div>
        <div className='box2'>
          <h1>Your Status</h1>
          <span>Bmi 2.5% <br/> Under weight</span>
          
        </div>
        <div className='box3'>
          image

          <img alt="local" src="localhost:3000/resources/images/bmilevel.png" />
        </div>
      </div>
    </>
  )
}

export default Dashboard