import React from 'react'
import './Project.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import project_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
const Project = () => {
  return (
    <div id='projects' className="project">
      <div className="project-title">
        <h1>
          My project
        </h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="project-container">
        {project_data.map((work, index) => {
          return <div key={index} className="services-format">
            <h3>
              {work.w_no}
            </h3>
            <img src={work.w_img} alt="" />
            <h2>
              {work.w_name}
            </h2>
          </div>
        })}
      </div>
      <div className="myproject-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  )
}

export default Project
