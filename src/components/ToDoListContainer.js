import React, { useEffect, useState } from 'react'
import ListComponents from './ListComponents'
import axios from 'axios'
export default function ToDoListContainer() {
const [tasks , setTasks] = useState('')
// let data = 'j'
// const data2 =  axios.get('http://localhost:5000/GetToDo', { withCredentials: true })
let ToDoArray;
const GetTasks = async(tasks)=>{
  const data = await axios.get('http://localhost:5000/GetToDo', { withCredentials: true })
  setTasks(data)
  
  console.log("inside GetTasks",tasks)
  return data
}

ToDoArray = tasks
console.log("This is todo array",ToDoArray)

useEffect(()=>{
  (async()=>{
    const dataNew = await GetTasks(await axios.get('http://localhost:5000/GetToDo', { withCredentials: true }))
    // setTasks(dataNew)
    // console.log("inside useEffect",tasks)
    // console.log("inside useEffect",tasks)
  })()
},[])


  // let data = "nmbhv";
  // const GetTask = async () => {
  //   console.log("hello", data)
  //   console.log("12")
  //   (async () => {
  //     data = await axios.get('http://localhost:5000/GetToDo', { withCredentials: true })
  //     setTasks(data)
  //   })
  //   setTasks(data)
  //   return data
  // }
  // const [tasks, setTasks] = useState(data)
  
  // useEffect(
  //   () => {
  //     // GetTask()
  //     // setTasks(data)
  //     // setTasks(data)
  //     // let xyz
  //     const get = (async () => {
  //       data = await axios.get('http://localhost:5000/GetToDo', { withCredentials: true })
  //       setTasks(data)
  //     })
  //     get()
  //   console.log("tasks", tasks)
      
  //   }, [setTasks])

  //         useEffect(()=>{(
  //     async ()=>{
  //         const xyz = await GetTask();
  //         console.log("useEffect is not working")
  //                 setTasks(xyz)
  //                 console.log(tasks)
  //     }
  // )()})
  return (
    <div>
      {/* {setTasks("data")} */}
      <ListComponents />
    </div>
  )
}
