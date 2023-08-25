import React, {useEffect} from "react";
import { useScrollContext } from "./ScrollContext"; // Import the custom hook

export default function Navbar({ projectsRef, aboutRef, contactRef }) {
    const scrollToRef = useScrollContext(); // Use the custom hook to get scrollToRef function
    useEffect(() => {
        // Assign refs after component mount
        projectsRef.current = document.getElementById("projects-title");
        aboutRef.current = document.getElementById("about-title");
        contactRef.current = document.getElementById("contact-title");
        // Assign other refs if needed
      }, []);
    return (
        <div style={{background: "rgba(73,155,234,1)",
            background: "-moz-linear-gradient(left, rgba(73,155,234,1) 0%, rgba(32,124,229,1) 100%)",
            background: "-webkit-gradient(left top, right top, color-stop(0%, rgba(73,155,234,1)), color-stop(100%, rgba(32,124,229,1)))",
            background: "-webkit-linear-gradient(left, rgba(73,155,234,1) 0%, rgba(32,124,229,1) 100%)",
            background: "-o-linear-gradient(left, rgba(73,155,234,1) 0%, rgba(32,124,229,1) 100%)",
            background: "-ms-linear-gradient(left, rgba(73,155,234,1) 0%, rgba(32,124,229,1) 100%)",
            background: "linear-gradient(to right, rgba(73,155,234,1) 0%, rgba(32,124,229,1) 100%)",
            filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#499bea', endColorstr='#207ce5', GradientType=1)"}}>
            <nav>
            <ul>
            <li onClick={() => scrollToRef(projectsRef)}>Projects</li>
            <li onClick={() => scrollToRef(aboutRef)}>About Me</li>
            <li onClick={() => scrollToRef(contactRef)}>Contact Me</li>
            </ul>
            
        </nav>
        </div>
        
    )
}