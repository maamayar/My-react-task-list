import React from "react";

const Header = ({ pendingTasks }) => {
  return (
    <>
      <h1>Task list</h1>
      <div className="counter-task">
        <h3>Completed:</h3>
        <h3>Pending: {pendingTasks}</h3>
      </div>
      <div className="add-task">
        <h3>Add task</h3>
      </div>
    </>
  );
};

export default Header;
