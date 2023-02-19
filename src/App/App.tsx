import React from "react";
import "./App.css";
import { NavBar } from "../NavBar/NavBar";
import { Home } from "../Screens/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
