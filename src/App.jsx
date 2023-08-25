
import './App.css';
import Hero from "./components/Hero"
import Mid from "./components/Mid"
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/contact"
import Navbar from "./components/NavBar"
import {ScrollProvider} from "./components/ScrollContext.js"
import React, { useRef } from "react";

export default function App() {
  const projectsRef = useRef(null); // Create a reference for the Projects section
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
  <>
  <ScrollProvider>
  <Navbar
  projectsRef={projectsRef}
  aboutRef={aboutRef}
  contactRef={contactRef}
  />
  <Hero/>
  <Mid/>
  <Projects />
  <About />
  <Contact />
  </ScrollProvider>
  </>
    
  );
}


