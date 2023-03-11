import React, {useState} from 'react'
import axios from "axios"
export default function ToDo() {
    const [todo, setToDo] = useState("")
    const clicked = async(e)=>{
        // e.preventDefault()
        try{
            const res = await axios.post("http://localhost:5000/ToDo/", {
                desc:todo
            },{withCredentials: true})}
        catch(error){
                console.log(error)
              }
        

    }
  return (
    <div>
        <form onSubmit={clicked}>
            <input type="text" placeholder='To Do' onChange={e=>(setToDo(e.target.value))} />
            <input type="submit" value = "Submit" />
        </form>
    </div>
  )
}
