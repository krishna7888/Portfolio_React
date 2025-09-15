import React from 'react'
import './Hero.css'
import profile_img from '../../assets/IMG_my2.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resumePDF from '../../assets/Krishna_Gupta_Resume.pdf';

const hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I am Krishna Gupta,</span> Full Stack Developer (MERN)</h1>
      <p>I’m Krishna Gupta, a passionate developer with strong skills in C++, Java, Data Structure & Algorithm ,OOPs Programming, and web development(MERN).
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with Me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a href={resumePDF} target="_blank" rel="noopener noreferrer">
            My Resume
          </a>
        </div>

      </div>
    </div>
  )
}

export default hero
