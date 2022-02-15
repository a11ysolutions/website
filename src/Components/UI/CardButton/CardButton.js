import React from "react"
import "../Button/Button.css"
import "./CardButton.css"

function CardButton({ children, size = "medium", variant = "dark", className = '', style}) {

    return (
        <div
            className={`a11y-button a11y-button-${size} a11y-button-${variant} ${className}`}
            style={{ ...style }}
        >
            {children}
        </div>
    )
}

export default CardButton