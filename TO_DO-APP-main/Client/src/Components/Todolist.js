import './Todolist.css';
import React from 'react';
import {AiFillCheckCircle} from "react-icons/ai";
import {IoCloseCircle} from "react-icons/io5";
import {AiOutlineEdit} from "react-icons/ai";
import axios from 'axios'
function Todolist(props) {
    const todolist = props.todolist.map((task,index) => {
        const taskComplete = task => {
            axios.put(`http://localhost:8000/api/tasks/${task._id}` , {
                _id : task._id,
                todo: task.todo,
                isComplete : !task.isComplete,
                quantity : task.quant
            }).then(res => props.taskComplete(res.data)).catch(err => console.log(err))
        }
        const removeTask = id => {
            axios.delete(`http://localhost:8000/api/tasks/${id}`).then(res => props.removeTask(res.data)).catch(err => console.log(err))
        } 
        return <li key = {index}>
            <div style = {{display : 'flex'}}>
               <AiFillCheckCircle className = {task.isComplete ? 'isComplete' : "checkicon"}/>
               <p className = {task.isComplete ? 'taskcomplete' : ''} onClick = {() => {
                   taskComplete(task)
               }}><p>{task.todo}</p><p>Quantity:{task.quantity}</p></p>
            </div>
            <div>
                <AiOutlineEdit className = 'edit' onClick = {() => {
                    props.tasktoUpdate(task)
                    props.showPopup()
                }}/>
                <IoCloseCircle className = 'close' onClick = {() => {
                    removeTask(task._id)
                }}/>
            </div>
        </li>
    })
    return (
        <div className = 'tasklist'>
            <ul>
                {todolist}
            </ul>
        </div>
    )
}

export default Todolist
