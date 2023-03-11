import React, {useState} from 'react'
import axios from 'axios'
import {Link,useNavigate} from "react-router-dom"
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
        {console.log(res.status)}
        if(res.status==200)
        {
            navigate("/ToDo")
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
