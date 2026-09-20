import React, {useState} from 'react';

function ToDo() {
    const [task, setTasks] = useState(["wake up", "eat breakfast", "go to work"]);
    const [newTask, setNewTask] = useState("");
    
function handleInputChange(event) {
    setNewTask(event.target.value);
}

function addTask() {
    if(newTask.trim() !== "") {
        setTasks(t => [...task, newTask]);
    setNewTask(""); // clear the text

    }
}

function deleteTask(index) {
    const updatedTasks = task.filter((element,i) => i !== index);
    setTasks(updatedTasks);

}

function toMoveTaskUp(index) {
  if (index > 0){
    const updatedTasks = [...task];
    [updatedTasks[index],updatedTasks[index - 1]] =
    [updatedTasks[index -1],updatedTasks[index]];
    setTasks(updatedTasks);
  }
}

function toMoveTaskDown(index) {

    if (index < task.length - 1 ){
    const updatedTasks = [...task];
    [updatedTasks[index],updatedTasks[index + 1]] = 
    [updatedTasks[index + 1],updatedTasks[index]];
    setTasks(updatedTasks);
  }
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