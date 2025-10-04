// BodyPortal.jsx
import React from 'react';
import { createPortal } from 'react-dom';

function BodyPortal({ children }) {
  return createPortal(
    <div className="body-overlay">
      {children}
    </div>,
    document.body
  );
}

export default BodyPortal;