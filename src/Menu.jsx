import React from "react";
import { useNavigate } from "react-router-dom";
import ToggleColorMode from "./theme/ToggleColorMode";


function Menu() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleTasksClick = () => {
    navigate("/tasks");
  };

  const handleAboutClick = () => {
    navigate("/about");
  };

  return (
    <nav>
      <ul>
        <li>
          <button type = "button" onClick={handleHomeClick}>Home</button>
        </li>
        <li>
          <button type = "button" onClick={handleTasksClick}>Tasks</button>
        </li>
        <li>
          <button type = "button"  onClick={handleAboutClick}>About Us</button>
        </li>
      </ul>
      <ToggleColorMode/>
    </nav>
  );
}

export default Menu;
