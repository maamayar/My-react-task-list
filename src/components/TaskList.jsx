import { useEffect } from "react";
import Header from "./Header";
import Task from "./Task";
import useTaskManager from "../useTaskManager";

const TaskList = () => {
  const { tasks, createTask, deleteTask } = useTaskManager();

  useEffect(() => {
    // Actualizar las tareas en el montaje inicial y cada vez que cambie la lista de tareas
    // mediante el efecto del useTaskManager
  }, [tasks]);

  const handleAddTask = (newTask) => {
    createTask(newTask);
  };

  return (
    <div>
      <Header pendingTasks={tasks.length} />
      <Task handleAddTask={handleAddTask} />
      <table>
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
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
