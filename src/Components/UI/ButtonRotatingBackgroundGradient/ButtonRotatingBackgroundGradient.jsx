import React from 'react';
import './ButtonRotatingBackgroundGradient.css';


/**
 role={role}
            className={`a11y-button a11y-button-${size} a11y-button-${variant} ${className}`}
            style={{ ...style }}
            onClick={onClick}
            aria-label={ariaText}
 */
const ButtonRotatingBackgroundGradient = ({ children, size = "medium", variant = "dark", className = '', style, onClick, ariaLabel, role="link" }) => {
    const ariaText = ariaLabel ? ariaLabel : children
    return (
        <button
            role={role}
            onClick={onClick}
            aria-label={ariaText}
            className={`a11y-button-gradient ${className}`}
        >
      <span className='gradient-background' />
      <span className={`button-content button-content-${variant} button-content-${size}`}>
        {children}
      </span>
    </button>
  );
};

export default ButtonRotatingBackgroundGradient;