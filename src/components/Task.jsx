import React, { useState } from "react";
import { FaTrash, FaPlusCircle, FaEdit } from "react-icons/fa";

const Task = ({ handleAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddChange = (e) => {
    e.preventDefault();
    if (title.trim() === "" || description.trim() === "") {
      return;
    }
    handleAddTask({ title, description });
    setTitle("");
    setDescription("");
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
            placeholder="Title"
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
            placeholder="Description"
            required
          />
        </div>
        <button className="btn btn-primary">Add</button>
      </form>
    </div>
  );
};

export default Task;
