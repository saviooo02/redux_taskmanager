import { useState } from "react"

function App() {

const [tasks,setTasks] = useState([{description : 'gdhdhd',completed:true }])
const [newtask,setNewTask] = useState()
  
const addTask = () => {
  setTasks([
    ...tasks,{description:newtask,completed:false}
  ])
  setNewTask("")
}

const deleteTask = (taskTobeDeleted)=>{
  setTasks(tasks.filter(task=>task!== taskTobeDeleted))
}

const toggleComplete = (taskToBeToggled)=>{
  setTasks(
    tasks.map((task)=> task===taskToBeToggled ? {...task , completed : !task.completed} : task )
  )
}

  return (
    <>
      <input placeholder="Add a new task" value={newtask} onChange={(e)=>setNewTask(e.target.value)}/>
      <button onClick={addTask}>Add</button>

      <p>All tasks :</p>
      <ul>
        {tasks.map((task,index)=>
          <li key={index}>
            <span style={{textDecoration :task.completed ? 'line-through' : 'none' }}>
              {task.description}
            </span>
            <button onClick={()=>toggleComplete(task)}>
              ✅
              </button>
                <button onClick={()=>deleteTask(task)}>
                🗑️
                  </button>
          </li>
        )}
      </ul>

      <p>Completed :</p>
      <ul>
        {tasks.map((task,index)=> task.completed ? <li key={index}>{task.description}</li> : null )}
      </ul>

      <p>Not Completed :</p>
      <ul>
        
      </ul>
    </>
  )
}

export default App
