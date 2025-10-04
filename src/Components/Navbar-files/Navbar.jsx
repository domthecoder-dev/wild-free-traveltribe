import React, { useState, useEffect } from 'react'
import WFLogo from '../../assets/wildandfree-rec.svg'
import "./Navbar.css"

// Simple components for the icons (using text characters)
const HamburgerIcon = ({ onClick }) => <div className="Hamburger-Icon" onClick={onClick}>&#9776;</div>;
const CloseIcon = ({ onClick }) => <div className="Close-Icon" onClick={onClick}>&times;</div>;

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      // 1. Apply the class to <html> for global fixes (stacking and scroll)
      document.documentElement.classList.add('menu-open-fix');
      
      // 2. ONLY the <html> class is necessary, 
      //    but we'll also set <body> overflow just to be safe.
      document.body.style.overflow = 'hidden'; 
    } else {
      // 1. Remove the class from <html>
      document.documentElement.classList.remove('menu-open-fix');
      
      // 2. Reset the <body> overflow
      document.body.style.overflow = 'auto'; 
    }
    
    // Cleanup function: runs when the component is removed or before the next run
    return () => {
      document.documentElement.classList.remove('menu-open-fix');
      document.body.style.overflow = 'auto'; 
    };
  }, [isMenuOpen]); // Dependency array: runs whenever isMenuOpen changes

const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    // Close the menu after scrolling
    setIsMenuOpen(false);
  }
};

// Define links once to be reused in both desktop and mobile views
const navLinks = (
  <ul className="NVLinks-list">
    <li><a onClick={() => scrollToSection('About')}>About</a></li>
    <li><a onClick={() => scrollToSection('Form')}>Sign Up</a></li>
    <li><a onClick={() => scrollToSection('Packages')}>Packages</a></li>
    <li><a onClick={() => scrollToSection('Contact')}>Contact Us</a></li>
  </ul>
);

return (
  <div className="Nav-Container">
    <div className="Nav-bar">
      <div className="Nav-Logo">
        <img
          src={WFLogo}
          alt="Safe Travel Group Wild and Free Logo"
          className="NVLogo"
        />
      </div>

      {/* 1. Desktop Links (Hidden on mobile via CSS) */}
      <div className="Nav-Links Desktop-Links">
        {navLinks}
      </div>

      {/* 2. Hamburger Icon (Visible only on mobile via CSS) */}
      <HamburgerIcon onClick={toggleMenu} />

      {/* 3. Mobile Slide-in Menu (Uses CSS class based on state) */}
      <div className={`Mobile-Menu ${isMenuOpen ? 'is-open' : ''}`}>
        <div className="Mobile-Menu-Header">
          <CloseIcon onClick={toggleMenu} />
        </div>
        <div className="Mobile-Links-Wrapper">
          {navLinks}
        </div>
      </div>

      {/* 4. Overlay/Backdrop (Closes menu when tapping outside) */}
      {isMenuOpen && <div className="Mobile-Menu-Overlay" onClick={toggleMenu}></div>}

    </div>
  </div>
)
}

export default Navbar