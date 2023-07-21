import React from "react";
import { FaCheck, FaReact } from "react-icons/fa";
import "../pages/AboutUs.css";

function AboutUs() {
  return (
    <div className="aboutus-container">
      <h1 className="aboutus-title">About us</h1>
      <div className="aboutus-description">
        <p>
          TaskList is a web and desktop application that helps you organize and manage your daily tasks or activities efficiently. With TaskList, you can add or create, delete, edit or update, and complete your tasks. The app provides a highly intuitive and user-friendly interface, making it easy to manage your daily responsibilities.
          <img className="image" src="/public/images/app-1.png" alt="Imagen 0" />
        </p>
      </div>
      <div className="aboutus-functionalities">
        <h2>Functionalities</h2>
        <ul className="aboutus-functionality-list">
          <li>
            <FaCheck className="aboutus-functionality-icon" />
            <span>Create Tasks</span> <p>Add a new task by providing a title and description.</p>
          </li>
          <img className="image" src="/public/images/add-1.png" alt="Imagen 1" />
          <li>
            <FaCheck className="aboutus-functionality-icon" />
            <span>Edit Tasks</span> <p>Update a task, as long as it has not been completed.</p>
          </li>
          <img className="image" src="/public/images/save-1.png" alt="Imagen 2" />
          <li>
            <FaCheck className="aboutus-functionality-icon" />
            <span>Complete Tasks</span> <p>Mark tasks as completed once you finish them.</p>
          </li>
          <img className="image" src="/public/images/completed-1.png" alt="Imagen 3" />
          <li>
            <FaCheck className="aboutus-functionality-icon" />
            <span>Delete Tasks</span><p> Remove tasks, whether they are completed or not.</p>
          </li>
          <img className="image" src="/public/images/edit-1.png" alt="Imagen 4" />
          <li>
            <FaCheck className="aboutus-functionality-icon" />
            <span>Complete All Tasks</span><p> Quickly complete all tasks at once.</p>
          </li>
          <img className="image" src="/public/images/completed-1.png" alt="Imagen 5" />
          <li>
            <FaCheck className="aboutus-functionality-icon" />
            <span>Delete All Tasks</span> <p>Delete all tasks from the list with ease.</p>
          </li>
          <img className="image" src="/public/images/delete-all-1.png" alt="Imagen 6" />
        </ul>
      </div>
      <div className="aboutus-technologies">
        <h2>Technologies</h2>
        <ul className="aboutus-technology-list">
          <li>
            <FaReact className="aboutus-technology-icon" />
            <span>React</span><p> The application was developed using the JavaScript library, React, and the Vite tool.</p>
          </li>
          <li>
            <FaReact className="aboutus-technology-icon" />
            <span>React Router</span><p>Enables navigation and routing between different pages of the application.</p>
          </li>
          <li>
            <FaReact className="aboutus-technology-icon" />
            <span>HTML and CSS</span><p> Used to structure the content and appearance of the application.</p>
          </li>
          <li>
            <FaReact className="aboutus-technology-icon" />
            <span>Local Storage</span><p> Data is stored in the browser's memory using the Local Storage API.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutUs;