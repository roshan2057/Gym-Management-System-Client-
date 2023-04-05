import React from 'react'
import './../../resources/css/navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Header = () => {
  let navigate= useNavigate();


const logout=()=>{
  Cookies.remove('logged');
  return navigate("/");
 
    };

  return (
    <>
    <div className='nav'>
    <Link to="/user">Shree Rhino Gym</Link>
    <ul>
      <li><Link to="/user">Dashboard</Link></li>
        <li><Link to="/user/fee">Fee</Link></li>
        <li><Link to="/user/shedule">Shedule</Link></li>
    </ul>
    <div className='button'>

    <button onClick={logout}>Logout</button>

    </div>
    </div>
    </>
  )

// const logout=()=>{
//   Cookies.remove('logged')
    }

export default Header