import React from 'react'
import './Navbar.css'
import img from './logo.png'
export default function Navbar() {
  return (
    <>
    <div className="container1">
        <img className = "logo" src={img} alt="logo" />
        <div className="container2">
        <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT US</li>
        </ul>
        </div>
        <button className='SignUp' type = "button"> Sign up</button>
    </div>
    </>
  )
}
