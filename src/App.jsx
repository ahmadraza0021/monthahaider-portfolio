
// Portfolio
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Portfolio/Navbar";
import Footer from "./Portfolio/Footer";

import Home from "./Portfolio/Pages/Home";
import About from "./Portfolio/Pages/About";
import Skills from "./Portfolio/pages/Skills";
import Projects from "./Portfolio/pages/Projects";

import Contact from "./Portfolio/pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={< About />} />
        <Route path="/skills" element={< Skills />} />
        <Route path="/contact" element={< Contact />} />
        <Route path="/projects" element={< Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;





