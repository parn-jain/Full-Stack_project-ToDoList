import React, {useState} from 'react'
import axios from 'axios'
import {Link,useNavigate} from "react-router-dom"
// import Cookies from 'js-cookie';
import http from "http"
import jwt from 'jsonwebtoken'
import Cookies from 'js-cookie'
export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const clicked = async(e)=>{
        e.preventDefault()
        const res = await axios.post("http://localhost:5000/login",{
            email:email,
            pass:pass
        },{withCredentials: true})
        // {console.log(res.data.status)}
        // const value = Cookies.get('UloggedIn');
        // console.log(value)

      //   const check = await axios.get("http://localhost:3000/UloggedIn",{
      //     email:email,
      //     pass:pass
      // },{withCredentials:true})
        // console.log(document.cookie)
        if(res.status==200)
        {
          localStorage.setItem('user',JSON.stringify(res.data),{withCredentials: true})
          console.log(res)
          // const x= Cookies.get('UloggedIn')
          
            navigate("/ToDo")
            // console.log(x)
        }
    }
  return (
    <div>
      <form onSubmit={clicked}>
        <input type="text" placeholder = "Email" onChange={e=>(setEmail(e.target.value))}/>
        <input type="text" placeholder = "Passwword" onChange={e=>(setPass(e.target.value))}/>
        <input type="submit" value = "Submit" />
      </form>
    </div>
  )
}
