import React,{useState} from 'react'
import './MainBody.css'
export default function MainBody() {
    const [ToDo , setToDo] = useState("")
    const clicked = async(e)=>{
        e.preventDefault();
    }
  return (
    <>
    <h1>To Do List</h1>
    <p>“Subtracting from your list of priorities is as important as adding to it.”</p>

    
    <form onSubmit = {clicked}>
        <div className = "form1">
        <input type="text" placeholder = "Type your Task to do" onChange={e=>{setToDo(e.targer.value)}} />
        <button type = "submit" className = "submit">SUBMIT</button>
        </div>
    </form>

    <h2>You have to do the following task today :-</h2>

    <div className="TDLcontainer">
        <ul className='ToDoList'>
            <li>
                <span className='Tasks'>task</span>
                <div className="btns">
                <button className='Delete' type = "button">Delete</button>
                <button className='Done' type = "button">Done</button>
                </div>
            </li>
        </ul>
    </div>

    </>
  )
}
