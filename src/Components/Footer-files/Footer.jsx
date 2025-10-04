import React from 'react'
import WFLogo from '../../assets/wildandfree-rec.svg'
import "./Footer.css"

function Footer() {
 const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start' // Scrolls the element to the top of the viewport
    });
  }
};

// In your Navbar component's JSX:

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
        <div className="Nav-Links">

        </div>
      </div>
      <p className="Credit-footer">&copy; 2025 Wild and Free Travel tribe |  Created by <br className="MobileBr"/><a className="CreditLink" href="https://www.deinnovativesolutions.co.za" target="_blank"><span className="Blue-letter">D</span><span className="Orange-letter">E</span><span className="Grey-Name"> Innovative Solutions</span></a></p>
    </div>
  )
}

export default Footer
