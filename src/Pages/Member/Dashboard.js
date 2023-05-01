import axios from 'axios'
import Cookies from 'js-cookie';
import React, { useEffect } from 'react'
import './../../resources/css/dashboard.css';

function Dashboard() {

  useEffect(() => {

    async function fetchdata() {
      try {
        await axios.get('/user/dashboard', {
          headers: {
            'auth': Cookies.get('token')
          }
        })
          .then(response => {
            const data = response.data[0];
            const text = bodyindex(data.bmi);

            document.getElementById('hgt').textContent = data.height;
            document.getElementById('wgt').textContent = data.weight;

            document.getElementById('bmi').textContent = data.bmi.toFixed(1) + " % ";
            document.getElementById('bmitext').textContent = text;
          })
          .catch(error => {
            console.log(error);
          });
      }
      catch (error) {
        throw error
      }

    }
    fetchdata();
    function bodyindex(bmi) {

      if (bmi < 18.5) {
        return (" Your are Under weight ");
      }

      else if (bmi > 18.5 && bmi < 25.0) {
        return (" Your are Normal")

      }
      else {
        return (" Your are Over Weight")
      }

    }
  }, []);

  const check = (event) => {
    event.preventDefault();
    let wt = event.target.weight.value;
    let ht = event.target.height.value;
    // console.log(weight, height);

    var result = document.getElementById("bmiresult");
    result.style.padding = '10px';


    if (wt === ' ' || ht === '') {

      result.innerHTML = "Please <br>Enter Weight and Height ";

    }
    else {
      ht = ht / 100;
      const bmi = wt / (ht ** 2);
      if (bmi > 18.5 && bmi < 40) {
        const text = bodyindex(bmi);
        result.innerHTML = bmi.toFixed(1) + text;
      }
      else {
        result.innerHTML = " Invalid <br>Weight and Height";

      }
    }

    function bodyindex(bmi) {

      if (bmi < 18.5) {
        return (" BMI <br>Your are Under weight ");
      }

      else if (bmi > 18.5 && bmi < 25.0) {
        return (" BMI <br>Your are Normal")

      }
      else {
        return (" BMI <br>Your are Over Weight")
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
          <table border={"2px"}>
            <tr>
              <td>Height</td>
              <td id='hgt'>null</td>
            </tr>
            <tr>
              <td >Weight</td>
              <td id='wgt'>150</td>
            </tr>
            <tr>
              <td>BMI</td>
              <td id='bmi'>No data</td>
            </tr>
            <tr >
              <td>Remarks</td>
              <td><span id='bmitext'> <br /> null</span></td>
            
            </tr>
          </table>


        </div>
        <div className='box3'>          

          <img alt="local" width={"100%"} src="https://westmedical.com/wp-content/uploads/2022/12/3932e867ae54709fb3d2b4f4ebebca7e6f8f6ff4-1993x1199-1.jpg" />
        </div>
      </div>
    </>
  )
}

export default Dashboard