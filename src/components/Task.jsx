import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

const Task = ({ handleAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleAddChange = (e) => {
    e.preventDefault();
    if (title.trim().length <3){
      setError("The title must have at least 3 characters.");
      return;
    }
    handleAddTask({ title, description });
    setTitle("");
    setDescription("");
    setError("");
  };

  return (
    <div>
      <form onSubmit={handleAddChange}>
        <div>
          <label htmlFor="title"></label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            required
          />
        </div>
        <div>
          <label htmlFor="description"></label>
          <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
          />
        </div>
        {error && <p>{error}</p>}
        <button className="add-task-button" type="submit">
          <FaPlusCircle /> Add Task
        </button>
      </form>
    </div>
  );
};

export default Task;
