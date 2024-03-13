import React from "react"
import "./Button.css"

function Button({ children, size = "medium", variant = "dark", id, className = '', style, onClick, ariaLabel, ariaLabelledby, role="link" }) {

    const ariaText = ariaLabel ? ariaLabel : children
    return (
        <button
            role={role}
            id={id}
            className={`a11y-button a11y-button-${size} a11y-button-${variant} ${className}`}
            style={{ ...style }}
            onClick={onClick}
            aria-label={ariaText}
            aria-labelledby={ariaLabelledby}
        >
            {children}
        </button>
    )
}

export default Button