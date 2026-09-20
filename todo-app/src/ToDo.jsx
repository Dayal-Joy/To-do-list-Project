import React, {useState} from 'react';

function ToDo() {
    const [task, setTask] = useState(["wake up", "eat breakfast", "go to work"]);
    const [newTask, setNewTask] = useState("");
    
function handleInputChange(event) {
    setNewTask(event.target.value);
}

function addTask() {

}

function deleteTask(index) {

}

function toMoveTaskUp(index) {

}

function toMoveTaskDown(index) {

}

return(
<div className="toDo">
    <h1>To-Do List</h1>
    <div>
        <input type="text" 
         placeholder="Enter a task"
            value={newTask}
            onChange={handleInputChange}/>
            <button className = "add-button" onClick={addTask}>Add Task</button>        
    </div>
    <ol>
        {task.map((task, index) => 
        <li key={index}>
            <span className = "text">{task}</span>
            <button className = "delete-button" onClick={() => deleteTask(index)}>Delete</button>
            <button className = "move-button" onClick={() => toMoveTaskUp(index)}>Up</button>
            <button className = "move-button" onClick={() => toMoveTaskDown(index)}>Down</button>
            </li>)}
            
    </ol>
</div>
);
}   
export default ToDo;