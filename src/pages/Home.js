import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import EmailIcon from "@material-ui/icons/Email"

import "../styles/Home.css"

function Home() {
  return (
    <div>
      <div className="home">
        <div className="about">
          <h2>Hi , My Name is Sukrit Goyal</h2>
          <div className="prompt">
            <p>A Full Stack Devloper Who Loves To CODE 	<span className='heart'>&#10084;</span></p>
            <a href='https://github.com/sukritgoyal26' target='_blank'><GitHubIcon/></a>
      <a href='https://linkedin.com/in/sukritgoyal26' target='_blank'><LinkedInIcon /></a>
      <a href="mailto:sukrit.goyal2020@vitbhopal.ac.in"><EmailIcon/></a>
          
          </div>
          
        </div>
        <div className="skills">
          <h1>Skills</h1>
          <ol className='list'>
            <li className='item'>
              <h2>Front-End</h2>
              <span> HTML , CSS , JS , Reactjs , Bootstrap </span>
            </li>
            <li className='item'>
              <h2>Back-End</h2>
              <span> NodeJS , ExpressJs , MongoDB , SQL  </span>
            </li>
            <li className='item'>
              <h2>Languages</h2>
              <span> Java , JavaScript , Python </span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Home