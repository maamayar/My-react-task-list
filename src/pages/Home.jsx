import React from "react";
import { FaCheck, FaTasks } from "react-icons/fa";
import "../pages/Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Hello!</h1>
      <h1 className="home-title-2">Welcome to TaskList</h1>
      <div className="home-description">
        <p>
        An efficient task management application. With this app, you can create, complete, update, and delete tasks or daily activities. Stay organized and manage your time effectively.
        </p>
        <br/>
        <p className="p-2">Experience the simplicity and effectiveness of TaskList!</p>

        <img className="image-home" src="/public/images/task-list-1.png" alt="Imagen 00" />
      </div>
    </div>
  );
}

export default Home;
