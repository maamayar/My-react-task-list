import React, { useState, useEffect } from "react";
import Task from "./Task";

const TaskList = () =>{
    const [tasks, setTasks]=useState([]);
    
    useEffect(() =>{
    const storedTasks = localStorage.getItem ("tasks");
    if (storedTasks){
        setTasks(JSON.parse(storedTasks));
    }
    }, []);

useEffect(() =>{
    localStorage.setItem ("tasks", JSON.stringify(tasks));
    },[tasks]);
     
    const handleAddTask = (newTask) =>{
        setTasks((prevTasks) => [... prevTasks,newTask]);
    };

    const handleDeleteTask = (index) =>{
        setTasks((preTasks) => preTasks.filter((_, i) => i !== index));
    };
    const renderTasks = ()=> {
        return tasks.map ((task, index) => (
            <Task 
            key={index}
            description={() => handleDeleteTask (index)}
            />
        ));
    };

    return (
    <div>
            {renderTasks()}
    </div>
    );
};
export default TaskList;