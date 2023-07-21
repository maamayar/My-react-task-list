import React from "react";
import { ChakraProvider, ColorModeScript} from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from "./theme/theme";
import ToggleColorMode from "./theme/ToggleColorMode"; 
import Sidebar from "./theme/Sidebar";
import Menu from "./Menu";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import AboutUs from "./pages/AboutUs";


function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
      <ToggleColorMode />
      <Sidebar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}


export default App;
