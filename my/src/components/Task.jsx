import React from "react";
import { FaTrash } from "react-icons/fa";

const Task =() => {
    return (
        <div>
            <span>
                <label htmlFor="" className="container-done"></label>
            </span>
            <button className="btn-delete">
                <FaTrash/>
            </button>
        </div>
    );
};
export default Task;