import React from 'react'
import ProjectItem from '../Components/ProjectItem'
import img1 from '../images/img1.jpg';
import img2 from '../images/calc.jpeg';
import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1> My Projects</h1>
      <div className="projectList">
        <ProjectItem name="crop prediction" image={img1}/>
        <ProjectItem name = "Calculator App" image={img2}/>

      </div>
    </div>
  )
}

export default Projects