import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'
const Services = () => {
   return (
      <div id='services' className='services'>
         <div className="services-title">
            <h1>
               Certificates
            </h1>
            <img src={theme_pattern} alt="" />
         </div>
         <div className="services-container">
            {Services_Data.map((Service, index) => {
               return <div key={index} className="services-format">
                  <h3>
                     {Service.s_no}
                  </h3>
                  <h2>
                     {Service.s_name}
                  </h2>
                  <div
                     className="services-readmore"
                     onClick={() => window.open(Service.pdf, "_blank")}
                     style={{ cursor: "pointer" }}
                  >
                     <p>Read More</p>
                     <img src={arrow_icon} alt="" />
                  </div>
               </div>
            })}
         </div>
      </div>
   )
}

export default Services
