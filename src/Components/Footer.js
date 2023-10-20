import React from 'react'
import InstagramIcon from "@material-ui/icons/Instagram"
import TwitterIcon from "@material-ui/icons/Twitter"
import FacebookIcon from "@material-ui/icons/Facebook"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import "../styles/Footer.css"


function Footer() {
  return (
    <div className="footer">
        <div className='socialMedia'>
          
      <a href='https://www.instagram.com/sukrit_26/' target='_blank'><InstagramIcon/></a>
      <a href='https://twitter.com/sukrit44407622' target='_blank'><TwitterIcon/></a>
      <a href='https://www.facebook.com/profile.php?id=100010120060292' target='_blank'><FacebookIcon/></a>
      <a href='https://github.com/sukritgoyal26' target='_blank'><GitHubIcon/></a>
      <a href='https://linkedin.com/in/sukritgoyal26' target='_blank'><LinkedInIcon /></a>
            
            
            
            
        </div>
        <p> &copy; 2023 SukritGoyal.com</p>
    </div>
  )
}

export default Footer