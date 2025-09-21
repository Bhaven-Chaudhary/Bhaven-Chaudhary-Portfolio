// src/App.jsx
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  // Optional: lock body scroll when mobile nav is open (we’ll add later)
  const [lockScroll, setLockScroll] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", lockScroll);
  }, [lockScroll]);

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <ScrollToTop />
    </>
  );
}
