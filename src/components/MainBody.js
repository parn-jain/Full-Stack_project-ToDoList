import React,{useEffect, useState,useRef} from 'react'
import {Link,useNavigate} from "react-router-dom"
import './MainBody.css'
import ToDoListContainer from './ToDoListContainer'

import axios from 'axios'
export default function MainBody() {

    const navigate = useNavigate();
    const [ToDo , setToDo] = useState("");



    const Clicked = async(e)=>{
        e.preventDefault();
        try{
            const res = await axios.post("http://localhost:5000/ToDo/", {
                desc:ToDo
            },{withCredentials: true})}
        catch(error){
                console.log(error)
              }

        
    }
  return (
    <>
    <h1>To Do List</h1>
    <p>“Subtracting from your list of priorities is as important as adding to it.”</p>

    
    <form onSubmit = {Clicked}>
        <div className = "form1">
        <input type="text" placeholder = "Type your Task to do" onChange={e=>{setToDo(e.target.value)}} />
        <input type="submit" className='submit'  value = "Submit" />
        </div>
    </form>

    <h2>You have to do the following task today :-</h2>

    <div className="tasks">
        <ToDoListContainer/>
    </div>


    </>
  )
}