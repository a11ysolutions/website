import React from "react"
import "./Button.css"

function Button({ children, size = "medium", variant = "dark", className = '', style, onClick }) {
    return (
        <button
            role={'link'}
            className={`a11y-button a11y-button-${size} a11y-button-${variant} ${className}`}
            style={{ ...style }}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button