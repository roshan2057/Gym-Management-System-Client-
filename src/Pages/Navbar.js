import React from 'react'
import './../resources/css/navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
    <div className='nav'>
    <Link to="/">Home</Link>
    <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </ul>
    <div className='end'>
    <Link to="/login">Login</Link>
    <Link to="/register">Register</Link>
    </div>
    </div>
    </>
  )
}

export default Navbar