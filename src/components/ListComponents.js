import React from 'react'
import './ListComponents.css'
export default function ListComponents() {
  
  return (
    <div>
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
    </div>
  )
}
