import "./App.css";
import { Route, Routes } from "react-router-dom";
import React from "react";

import Home from "./pages/Home";
import Contact from "./pages/contact";
import Services from "./pages/services";
import Realisations from "./pages/realisations";
import Blog from "./pages/blog";
import Accordeon from "./pages/Accordeon";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Realisations" element={<Realisations />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Accordeon" element={<Accordeon />} />
      </Routes>
    </div>
  );
}
