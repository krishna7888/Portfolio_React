import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import linkdin_icon from '../../assets/linkdin_icon.svg'
const Contact = () => {

const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "16f6ad49-e15e-4b90-9e0f-9f3bc8161799");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
     alert(res.message);
    }
  };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Contact Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's Talk</h1>
            <p>If you’d like to get in touch, please fill out the form with your name, email, and a brief message. You can also connect with me on LinkedIn for professional networking.</p>
            <div className="contact-details">
                <div className="contact-detail">
                 <img src={mail_icon} alt="" />
                 <p>krishna9559407012@gmail.com</p>
                </div>
                 <div className="contact-detail">
                    <img src={call_icon} alt="" />
                    <p>+91 6307528229</p>
                </div>
                 <div className="contact-detail">
                    <img src={location_icon} alt="" />
                    <p>PSIT College of Higher Education,Kanpur</p>
                </div>
                <div className="contact-detail" id='contact-detail'>
                    <img src={linkdin_icon} alt="" />
                    <a href="https://www.linkedin.com/in/krishna-gupta-74b265304/">https://www.linkedin.com/in/krishna-gupta-74b265304/</a>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name="Name"/>
            <label htmlFor="">Your E-Mail</label>
            <input type="email" placeholder='Enter your email' name="email"  />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
            <button type='submit' className='contact-submit'>Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
