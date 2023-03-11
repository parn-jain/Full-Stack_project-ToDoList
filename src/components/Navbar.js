import React from 'react'
import './Navbar.css'
import {Link,useNavigate} from "react-router-dom"
import img from './logo.png'
export default function Navbar() {
  const navigate = useNavigate();
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
        <div className='Buttons'>
        <button className='SignUp' type = "button" onClick={()=>navigate('/Register')}> Sign up</button>
        <button className='SignUp' type = "button" onClick={()=>navigate('/Login')}> Login </button>
        </div>
    </div>
    </>
  )
}
