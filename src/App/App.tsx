import React from "react";
import "./App.css";
import { NavBar } from "../NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../Screens/Home";
import { About } from "../Screens/About";
import { Error } from "../Screens/Error";
import { Contact } from "../Screens/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
