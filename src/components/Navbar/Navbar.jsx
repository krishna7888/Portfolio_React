import React, { useState, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-100%"; // responsive
  };

  const handleClick = (section) => {
    setMenu(section);
    closeMenu(); // close sidebar after navigation
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="nav-logo" />

      {/* Hamburger icon */}
      <img src={menu_open} onClick={openMenu} alt="menu" className="nav-mob-open" />

      {/* Sidebar Menu */}
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="close" className="nav-mob-close" />

        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => handleClick("home")}>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underline} alt="underline" />}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => handleClick("about")}>About me</p>
          </AnchorLink>
          {menu === "about" && <img src={underline} alt="underline" />}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => handleClick("services")}>Certificates</p>
          </AnchorLink>
          {menu === "services" && <img src={underline} alt="underline" />}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#projects">
            <p onClick={() => handleClick("projects")}>Projects</p>
          </AnchorLink>
          {menu === "projects" && <img src={underline} alt="underline" />}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => handleClick("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt="underline" />}
        </li>
      </ul>

      {/* Desktop button */}
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect with me
        </AnchorLink>
      </div>
    </div>
  )
};

export default Navbar;
