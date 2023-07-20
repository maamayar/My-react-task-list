import React from "react";
import Header from "../components/Header";
import TaskList from "../components/TaskList";
import useTaskManager from "../useTaskManager";
import  "../App.css"


function Tasks({ match }) {
  const { tasks,
          createTask, 
          deleteTask, 
          updateTask 
        } = useTaskManager();

  const handleAddTask = (newTask) => {
    createTask(newTask);
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  const handleUpdateTask = (taskId, updatedTask) => {
    updateTask(taskId, updatedTask);
  };

  return (
    <div>
      <TaskList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onUpdateTask={handleUpdateTask}
        match={match}
      />
    </div>
  );
}

export default Tasks;
