// ScrollToTopPortal.jsx
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './ScrollToTopButton.css';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  if (!isVisible) return null;

  return createPortal(
    <button 
      className="scroll-to-top" 
      onClick={scrollToTop}
      title="Go to top"
    >
      &#9650;
    </button>,
    document.body
  );
}

export default ScrollToTopButton;