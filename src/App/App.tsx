import React from "react";
import "./App.css";
import { NavBar } from "../NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../Screens/Home";
import { Resume } from "../Screens/Resume";
import { Error } from "../Screens/Error";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="resume" element={<Resume />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
