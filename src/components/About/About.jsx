import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/IMG_my2.jpg'
const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a passionate and results-driven programmer with expertise in C++, Java, and web technologies including HTML, CSS, JavaScript, and the MERN stack.</p>
                        <p>Beyond technical skills, I am highly motivated to learn and adapt to emerging technologies, with a track record of quickly mastering new tools and frameworks. My approach blends problem-solving, creativity, and attention to detail, enabling me to create innovative solutions that meet both functional and user experience goals. </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"> <p>HTML & CSS</p> <hr style={{ width: "50%" }} /> </div>
                        <div className="about-skill"> <p>Java Script</p> <hr style={{ width: "50%" }} /> </div>
                        <div className="about-skill"> <p>C++</p> <hr style={{ width: "50%" }} /> </div>
                        <div className="about-skill"> <p>python</p> <hr style={{ width: "50%" }} /> </div>
                        <div className="about-skill"> <p>Java</p> <hr style={{ width: "50%" }} /> </div>
                        <div className="about-skill"> <p>OOPs</p> <hr style={{ width: "50%" }} /> </div>
                        <div className="about-skill"> <p>MERN</p> <hr style={{ width: "50%" }} /> </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>Top 0.5% Coder on Naukri Code360</h1>
                    <p>Earned the Badge Achiever in “Basics of C++” and currently aiming for the Master badge.</p>
                </div>
                <hr />
                <div className="about-achievement">
                  <h1>International Mathematics Olympiad – Top 5 (District Level)</h1>
                  <p>Ranked among the top 5 performers in the district, demonstrating exceptional analytical and problem-solving skills.</p>
                </div>
            </div>
        </div>
    )
}

export default About
