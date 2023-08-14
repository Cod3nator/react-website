
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

import "./Header.css"

// import { Link, NavLink } from "react-router-dom";


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
   <div className="Header">
                 <nav>
                 <div className="logo">
        <img src="assets/EC%20New%20Logo.svg" alt="Logo"/>
    </div>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
         Overview
        </li>
        <li>
          Amenities
        </li>
        <li>
          Connectivity
        </li>
        <li>
         Gallery
        </li>
        <li>
         Walkthrough
        </li>
        <li>
          Layout
        </li>
        <li>
          About Us
        </li>
        <li>
          Visit Us
        </li>
      </ul>
    </nav>
   </div>
  )
}


export default Header