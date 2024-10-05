import { useState } from "react"

function App() {

const [tasks,setTasks] = useState([])
const [newtask,setNewTask] = useState()
  
const addTask = () => {
  setTasks([
    ...tasks,newtask
  ])
  setNewTask("")
}

const deleteTask = (taskTobeDeleted)=>{
  setTasks(tasks.filter(task=>task!== taskTobeDeleted))
}

  return (
    <>
      <input placeholder="Add a new task" value={newtask} onChange={(e)=>setNewTask(e.target.value)}/>
      <button onClick={addTask}>Add</button>

      <p>All tasks :</p>
      <ul>
        {tasks.map((task,index)=>
          <li key={index}>{task}<button onClick={()=>deleteTask(task)}>Delete</button></li>
        )}
      </ul>
    </>
  )
}

export default App
