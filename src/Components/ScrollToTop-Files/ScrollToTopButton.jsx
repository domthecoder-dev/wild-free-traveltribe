// ScrollToTopButton.jsx
import React, { useState, useRef, useEffect } from 'react';
import './ScrollToTopButton.css';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const sentinelRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hidden element that triggers button visibility */}
      <div 
        ref={sentinelRef} 
        style={{ position: 'absolute', top: '500px', height: '1px' }} 
      />
      {isVisible && (
        <button 
          className="scroll-to-top" 
          onClick={scrollToTop}
          title="Go to top"
        >
          ↑
        </button>
      )}
    </>
  );
}

export default ScrollToTopButton;