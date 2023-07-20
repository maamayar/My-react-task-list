import React from "react";
import { FaCheck, FaTasks } from "react-icons/fa";
import "../pages/Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to TaskList App</h1>
      
      <div className="home-description">
        <p>
          Hello! Welcome to TaskList, an efficient task management application. With this app, you can create, complete, update, and delete tasks or daily activities. Stay organized and manage your time effectively!
        </p>
        <img className="image-home" src="/public/images/task-list-1.png" alt="Imagen 00" />
      </div>
    </div>
  );
}

export default Home;
