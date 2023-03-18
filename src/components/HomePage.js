import React,{useEffect, useState,useRef} from 'react'
import './HomePage.css'
import axios from 'axios'
import {Link,useNavigate} from "react-router-dom"
export default function HomePage() {
   const [ auth , setAuth] = useState(false);
    const verifyAuth = async () =>{
        try{
            const res = await axios.get("http://localhost:5000/is_logged_in",{withCredentials: true})
            console.log(res,"30")
            return res.data
        }
        catch(err)
        {
            console.log(err)
            return false;
        }
    };
    useEffect(() =>{
        (
            async () => {
                const data = await verifyAuth()
                console.log("new useEffect")
                console.log(data)
                 setAuth(data)
            }
        )()
    },[])

const HandelClick = async(e)=>{
  e.preventDefault()
  console.log(auth)
        if(auth)
        {
            navigate("/ToDo")
        }
        else{
            alert('You have to loggin 1st');
            navigate("/Login")
        }
}
  const navigate = useNavigate();
  return (
    <>
        <div className="container">
            <button type='button' onClick = {HandelClick} className = "HomeButton">  Start you day  </button>
        </div>
    </>
  )
}