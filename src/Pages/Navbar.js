import React from 'react'
import './../resources/css/navbar.css'
import { Link } from 'react-router-dom'
import Auth from '../Auth'
function Navbar() {
  const usertype = Auth();
  return (
    <>
    <div className='nav'>
    <Link to="/">Shree Rhino Gym</Link>
    <ul>


          {(usertype === "user" || usertype === "admin")?
          <>
        <li><Link to="/user">Home</Link></li>
        <li><Link to="/user/fee">Fee</Link></li>
        <li><Link to="/user/shedule">Shedule</Link></li>
          </>: null}
          
       
{(usertype ==="admin")?
<>
<li><Link to="/admin/viewmember">View Members</Link></li>
<li><Link to="/admin/viewpackage">View Package</Link></li>

</>:null}


<li><Link to="/about">About</Link> </li>

<li><Link to="/contact">Contact</Link></li>


    </ul>
    <div className='end'>
    {(usertype === "user" || usertype ==="admin")?
<>
<Link to ="/profile">Profile</Link>
<Link  to="/logout">Logout</Link>

</>:<>
<Link to="/login">Login</Link>
    <Link to="/register">Register</Link>
</>}
    </div>
    </div>
    </>
  )
}

export default Navbar