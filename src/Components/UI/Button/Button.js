import React from "react"
import "./Button.css"

function Button({ children, size = "medium", variant = "dark", style, onClick }) {
    return (
        <button
            className={`a11y-button a11y-button-${size} a11y-button-${variant}`}
            style={{ ...style }}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button