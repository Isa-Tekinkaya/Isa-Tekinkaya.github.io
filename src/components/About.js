import React, { useRef, useEffect, useState } from "react";
import Lottie from "lottie-react";
import CodingGuy from "../animations/about_me_animation.json"

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


export default function About(){
    const aboutText = useRef();
    const isVisibleAboutText = useIsVisible(aboutText);
    const aboutRef = useRef();

    return (
        <div className="about-section">
        <h2 id="about-title" className="about-title" ref={aboutRef} >About Me</h2>
        <p className={`about-text fade-in-section ${isVisibleAboutText ? 'is-visible' : ''}`} ref={aboutText}><em> Welcome to my webpage.</em> I am an enthusiastic and self-driven individual with a passion for learning. My journey into the world of programming began as a self-learner, where I devoted myself to various programming languages and concepts.
        <br></br><br></br>
        Through dedication and hard work, I earned the privilege of being selected for a prestigious coding boot camp, where I further honed my skills and knowledge. 
        Graduating from the boot camp not only enriched my technical expertise but also instilled in me a deep sense of accomplishment and determination.
        <br></br>
        <br></br>
        Each project I embark on becomes a part of my identity, and I wholeheartedly embrace the responsibility it entails.
        
        <br></br><br></br>Thank you for visiting my webpage, and I hope you enjoy exploring my projects. Feel free to reach out if you have any questions or if you're interested in collaborating on exciting projects. Together, let's create meaningful and impactful solutions for the world. 
        </p>
        <div className="coding-guy">
        <Lottie animationData={CodingGuy}/>

        </div>
      <h2 className="about-title">Skills</h2>
            <div className="skills-section">
              <ul className="programming-lang">
                <li className="lang-html"></li>
                <p className="lang-text">Hyper Text Markup Language</p>
              </ul>
              <ul className="programming-lang">
                <li className="lang-css"></li>
                <p className="lang-text">Cascading Style Sheets</p>
              </ul>
              <ul className="programming-lang">
                <li className="lang-js"></li>
                <p className="lang-text-js">Java Script</p>
              </ul>
              <ul className="programming-lang">
                <li className="lang-react"></li>
                <p className="lang-text">React</p>
              </ul>
              <ul className="programming-lang">
                <li className="lang-bootstrap"></li>
                <p className="lang-text">Bootstrap</p>
              </ul>
              <ul className="programming-lang">
                <li className="lang-nodejs"></li>
                <p className="lang-text">Node.js</p>
              </ul>
              <ul className="programming-lang">
                <li className="lang-json"></li>
                <p className="lang-text">JavaScript Object Notation</p>
              </ul>
              <ul className="programming-lang">
                <li className="lang-npm"></li>
                <p className="lang-text">Node Package Manager</p>
              </ul>
              <ul className="programming-lang">
                <li className="lang-firebase"></li>
                <p className="lang-text">Firebase</p>
              </ul>
              <ul className="programming-lang">
                <li className="lang-jest"></li>
                <p className="lang-text">Jest</p>
              </ul>
              <ul className="programming-lang">
                <li className="lang-circleci"></li>
                <p className="lang-text">CircleCI</p>
              </ul>
              <ul className="programming-lang">
                <li className="lang-git"></li>
                <p className="lang-text">Git</p>
              </ul>
              <ul className="programming-lang">
                <li className="lang-ubuntu"></li>
                <p className="lang-text">Ubuntu</p>
              </ul>
            </div>
    </div>
    )
}
