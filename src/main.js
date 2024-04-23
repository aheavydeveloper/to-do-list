
import { useState } from "react"
import ReactDOM from "react-dom/client"
const Todolist = () => {
    console.log("hollas")
    const [task, setTask] = useState('')
    const [taskList , updateList]  = useState([])

    // const tasks = [{ name: 'task1', complete: true }, { name: 'task2', complete: false }, { name: 'task3', complete: false }]
    
    const handleTask = (tskName) => {
       const updatedList =  taskList.map((tsk) => {
            if (tsk.name === tskName) 
                tsk.complete = !(tsk.complete)
                return tsk;  
        })
        updateList(updatedList)
    }
    


    return (
        <div className="main">
            <input type="text" placeholder="add task here..." value={task} onChange={(e)=>setTask(e.target.value)}></input>
            <button onClick={() => {
                updateList([...taskList, { name: task, complete: false }])
                setTask('')
            }}>Add</button>
        <ul>
            {taskList.map((item, index) => {
                return <li className={item.complete ? "task_style" : "task_style1"}
                onClick={()=>handleTask(item.name)}
                >{item.name}</li>
            })}
         </ul>

        </div>
    )
}

const root = ReactDOM.createRoot(document.querySelector('.main'))
    root.render(<Todolist/>)