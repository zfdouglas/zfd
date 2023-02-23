import React from "react";
import "./App.css";
import { NavBar } from "../NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../Screens/Home";
import { About } from "../Screens/About";
import { Error } from "../Screens/Error";
import { Contact } from "../Screens/Contact";
import { Work } from "../Screens/Work";
import { Blog } from "../Screens/Blog";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="portfolio" element={<Work />} />
        <Route path="blog" element={<Blog />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
