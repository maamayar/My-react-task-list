import React, { useState, useEffect } from "react";
const Header = ({ pendingTasks, completedTasks }) => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("username", username);
  }, [username]);

  return (
    <div className="header">
      <h1>
        Welcome{" "}
      </h1>
      <div>
        <h1>
      <input className="input-name"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your name"
        />
        </h1>
      </div>
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
