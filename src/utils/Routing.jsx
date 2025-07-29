import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import Projects from "../Components/Projects";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Skills from "../Components/Skills.jsx";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
