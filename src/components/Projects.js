import seaImage from "../Images/sea_Saver.png";
import mountainImage from "../Images/mountainProject.png";
import pingpongImage from "../Images/pingpong.png";
import colorgameImage from "../Images/colorgame.png";
import React, { useRef, useEffect, useState } from "react";


// Custom hook to check if an element is in the viewport and if it has been faded in
  function useIsVisible(ref) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasFadedIn, setHasFadedIn] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // If the element is more than 50% visible and has not faded in before, fade it in
      if (entry.isIntersecting && !hasFadedIn) {
        setIsVisible(true);
        setHasFadedIn(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: .1 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, hasFadedIn]);

  return isVisible;
}

export default function Projects() {
  const projectsRef = useRef();
  const seaRef = useRef();
  const mountainRef = useRef();
  const pingpongRef = useRef();
  const colorgameRef = useRef();
  const isVisibleSea = useIsVisible(seaRef);
  const isVisibleMountain = useIsVisible(mountainRef);
  const isVisiblePingpong = useIsVisible(pingpongRef);
  const isVisiblecolorgame = useIsVisible(colorgameRef);

  return (
  <>
  
  <h2 id="projects-title" className="projects-title" ref={projectsRef}>
  Projects
  </h2>  
  <div className="projectsList"> 
  
  <div className={`projectCard fade-in-section ${isVisibleSea ? 'is-visible' : ''}`} ref={seaRef}>
    <ul className="projects">
      <img src={seaImage} alt="Project" />
      <li>
      A Collaboration of 4 Developers who want to rescue the sea. Built with React and uses Firebase for authentication.          
      </li>
      <div className="card-footer">
        <button className="view-project-button"><a href="https://isa-tekinkaya.github.io/Capstone-Project/">View Project</a></button>
        <button className="view-code-button"><a href="https://github.com/Isa-Tekinkaya/Capstone-Project">View Code</a></button>
      </div>
    </ul>
    
  </div>

  <div className={`projectCard fade-in-section ${isVisibleMountain ? 'is-visible' : ''}`} ref={mountainRef}>
    <ul className="projects">
      <img src={mountainImage} alt="Project" />
      <li>
      Responsive website built with Bootstrap including carousel and accordion.
      </li>
      <div className="card-footer">
        <button className="view-project-button"><a href="https://isa-tekinkaya.github.io/Mountain-Of-Your-Choise.github.io/">View Project</a></button>
        <button className="view-code-button"><a href="https://github.com/Isa-Tekinkaya/Mountain-Of-Your-Choise">View Code</a></button>
      </div>
    </ul>
    
  </div>

  <div className={`projectCard fade-in-section ${isVisiblecolorgame ? 'is-visible' : ''}`} ref={colorgameRef}>
    <ul className="projects">
      <img src={colorgameImage} alt="Project" />
      <li>
      A responsive web game which teaches the RGB color model. It has a hard and an easy mode.
      </li>
      <div className="card-footer">
        <button className="view-project-button"><a href="https://isa-tekinkaya.github.io/CSS-Color-Game/">View Project</a></button>
        <button className="view-code-button"><a href="https://github.com/Isa-Tekinkaya/CSS-Color-Game">View Code</a></button>
      </div>
    </ul>
    
  </div>
  
  <div className={`projectCard fade-in-section ${isVisiblePingpong ? 'is-visible' : ''}`} ref={pingpongRef}>
    <ul className="projects">
      <img src={pingpongImage} alt="Project" />
      <li>
      A software which allows you to keep a record of the scores in a ping pong match.
      </li>
      <div className="card-footer">
        <button className="view-project-button"><a href="https://isa-tekinkaya.github.io/ScoreKeeper/">View Project</a></button>
        <button className="view-code-button"><a href="https://github.com/Isa-Tekinkaya/ScoreKeeper">View Code</a></button>
      </div>
    </ul>
    
  </div>

</div>
</>
  );
}