import React from 'react'
import './ContactUs.css'

function ContactUs() {
  return (
    <div id="Contact" className="ContactSec-Container">
      <h1>Have More Questions?</h1>
      <h3>Feel Free to Contact Us!</h3>
      <ul>
        <li>WhatsApp:<br className="MobileBr"/><a href="https://wa.me/27827174772" target="_blank" alt="to travel agent's whatsapp"> +27 82 717 4772</a></li>
        <li>Email Us:<br className="MobileBr"/><a href="mailto: info@wildandfreezanzibar.com"> traveltribe@wildandfreezanzibar.com</a></li>
      </ul>
    </div>
  )
}

export default ContactUs
