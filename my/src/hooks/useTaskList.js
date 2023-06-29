import { useReducer, userEffect} from "react";
import {taskReducer} from "../taskReducer";

const useTaskList =() => {

    const initialState =[];

    const init= ()=>{
        return JSON.parse (localStorage.getItem("tasks")) || []
    }

    const [task,dispatch] = useReducer (
        taskReducer,
        initialState,
        init
        );
    
    userEffect (()=> {
        localStorage.setItem ("tasks", JSON.stringify(taks))
}, [tasks])
    const handleNewTask = task => {
        const action ={
            type: "Add Task",
            payload: task,
        };
        dispatch (action);
    };

    const handleDeleteTask = id =>{
        const action ={
            type: "Delete Task",
            payload: id,

        };
        dispatch (action);
    };

    const handleCompleteTask = id => {
        const action ={
            type: "Complete Task",
            payload: id,
        };
        dispatch (action);
    };

    const handleUpdateTask = (id, description) =>{
        const action = {
            type: "Update Task",
            payload: {
                    id,
                    description,
            };
        };
        dispatch (action);
    };
    return {
        handleNewTask,
        handleDeleteTask,
        handleCompleteTask,
        handleUpdateTask
    }
};

export default useTaskList;