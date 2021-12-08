import React from "react"
import "./Pill.css"
import "../HomeIlustration/HomeIlustration.css"

function Pill({ children, position, dotPosition = "bottom-left", className }) {
    return (
        <div className={"a11y-pill-container " + className} style={{ ...position }}>
            <div className={`a11y-dot a11y-dot-${dotPosition}`}></div>
            <div className="a11y-pill">
                <span className="a11y-pill-text">{children}</span>
            </div>
        </div>
    )
}

export default Pill