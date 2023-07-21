// TaskList.jsx
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Task from "../components/Task";
import useTaskManager from "../useTaskManager";
import { FaTrash, FaEdit, FaSave, FaTimes, FaSquare, FaCheckSquare, FaPlusCircle } from "react-icons/fa";

const TaskList = ({ darkMode }) => {
  const { tasks, createTask, deleteTask, updateTask, setTasks } = useTaskManager();
  const [editingTaskId, setEditingTaskId] = useState("");
  const [editingTitle, setEditingTitle] = useState("");
  const [editingDescription, setEditingDescription] = useState("");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, [setTasks]);

  const handleAddTask = (newTask) => {
    createTask(newTask);
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  const handleDeleteAllTasks = () => {
    setTasks([]);
    localStorage.removeItem("tasks");
  };

  const handleStartEditing = (task) => {
    setEditingTaskId(task.id);
    setEditingTitle(task.title);
    setEditingDescription(task.description);
  };

  const handleCancelEditing = () => {
    setEditingTaskId("");
    setEditingTitle("");
    setEditingDescription("");
  };

  const handleSaveEditing = () => {
    updateTask(editingTaskId, { title: editingTitle, description: editingDescription });
    handleCancelEditing();
  };

  const handleToggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.length - completedTasks;

  return (
    <div className="container-task-list">
      <Header pendingTasks={pendingTasks} completedTasks={completedTasks} />
      <Task handleAddTask={handleAddTask} />
      <table className={darkMode ? 'dark-mode' : ''}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>
                {editingTaskId === task.id ? (
                  <input
                    type="text"
                    value={editingTitle}
                    onChange={(e) => setEditingTitle(e.target.value)}
                  />
                ) : (
                  task.title
                )}
              </td>
              <td>
                {editingTaskId === task.id ? (
                  <input
                    type="text"
                    value={editingDescription}
                    onChange={(e) => setEditingDescription(e.target.value)}
                  />
                ) : (
                  task.description
                )}
              </td>
              <td className="buttons">
                {task.completed ? (
                  <button className="check-square-icon" onClick={() => handleToggleComplete(task.id)}>
                    <FaCheckSquare />
                  </button>
                ) : (
                  <button className="square-icon" onClick={() => handleToggleComplete(task.id)}>
                    <FaSquare />
                  </button>
                )}
                {editingTaskId === task.id ? (
                  <>
                    <button className="save-icon" onClick={handleSaveEditing}>
                      <FaSave />
                    </button>
                    <button className="times-icon" onClick={handleCancelEditing}>
                      <FaTimes />
                    </button>
                  </>
                ) : (
                  <>
                    <button className="edit-icon" onClick={() => handleStartEditing(task)}>
                      <FaEdit />
                    </button>
                    <button className="trash-icon" onClick={() => handleDeleteTask(task.id)}>
                      <FaTrash />
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {tasks.length > 0 && (
        <button className="delete-all-task" onClick={handleDeleteAllTasks}>
          <span>
            <FaTrash />
          </span>
          Delete All Tasks
        </button>
      )}
    </div>
  );
};

export default TaskList;
