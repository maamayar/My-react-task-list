import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
