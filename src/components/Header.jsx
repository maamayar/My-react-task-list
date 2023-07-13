import React from "react";

const Header = ({ pendingTasks, completedTasks }) => {
  return (
    <div className="header">
      <h1>Task List</h1>
      <div className="counter-task">
        <h3>
          <span>Completed: {completedTasks}</span>
        </h3>
        <h3>
          <span>Pending: {pendingTasks}</span>
        </h3>
      </div>
    </div>
  );
};

export default Header;
