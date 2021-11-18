import React from "react"
import "./Pill.css"


function Pill({ children, position, dotPosition = "bottom-left" }) {
    return (
        <div className="a11y-pill-container" style={{ ...position }}>
            <div className={`a11y-dot a11y-dot-${dotPosition}`}></div>
            <div className="a11y-pill">
                <text className="a11y-pill-text">{children}</text>
            </div>
        </div>
    )
}

export default Pill