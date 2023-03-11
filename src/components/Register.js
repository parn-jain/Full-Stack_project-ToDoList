import React, {useState} from 'react'
import axios from 'axios'
import {Link,useNavigate} from "react-router-dom"

export default function Register() {
  const navigate = useNavigate();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [cpass, setCpass] = useState("")

const clicked = async(e)=>
{
  
    e.preventDefault();
    try{
      const res = await axios.post("http://localhost:5000/",{
        name:name,
        email:email,
        pass:pass,
        cpass:cpass
      },{withCredentials: true})
    } catch(error){
      console.log(error)
    }
}

  return (
    <form onSubmit={clicked}>
        <input type="text" placeholder = "Name" onChange={e=>{setName(e.target.value)}} />
        <input type="text" placeholder = "Email" onChange={e=>{setEmail(e.target.value)}} />
        <input type="text" placeholder = "Password" onChange={e=>{setPass(e.target.value)}} />
        <input type="text" placeholder = "Conform Password" onChange={e=>{setCpass(e.target.value)}} />
        <input type="submit" value = "Submit" />
    </form>
  )
}
