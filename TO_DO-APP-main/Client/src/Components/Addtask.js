import './Addtask.css'
import React ,{useState}from 'react'
import axios from 'axios'
function Addtask(props) {
    const [task,Settask] = useState("")
    const [quant,setQuant]=useState("")
    const addtask = () => {
        if(task.trim() === ''){
            return 
        } else {
            axios.post('http://localhost:8000/api/tasks' , {
                todo : task,
                isComplete : false,
                quantity : quant
            }).then(res => {
                Settask("")
                props.addTask(res.data)
            }).catch(err => console.log(err))
        }
    }
    return (
        <div className = 'addtask'>
            <input type='text' placeholder = 'Enter Item Name' value = {task} onChange = {event => Settask(event.target.value)}/>
            <input type= 'text' placeholder='Enter quantity' value={quant} onChange = {e=> setQuant(e.target.value)}/>
            <button onClick = {() => addtask()}>Add Item</button>
        </div>
    )
}

export default Addtask
