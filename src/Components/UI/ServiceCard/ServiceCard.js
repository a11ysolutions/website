import React from "react"
import "./ServiceCard.css"
import Button from "../Button/Button"

function ServiceCard({ children, header, imgSrc, imgColor = "white", style, onClickButton }) {
    return (
        <div className="service-card-container" style={{ ...style }}>
            <div className="service-card" style={{ backgroundColor: imgColor }}>
                <img
                    alt={header}
                    src={imgSrc}
                    className="service-card-img"
                />
            </div>
            <h3>{header}</h3>
            <div className="service-card-text">
                {children}
            </div>
            <div style={{ marginTop: "27px" }}>
                <Button onClick={onClickButton}>Learn More</Button>
            </div>
        </div>
    )
}

export default ServiceCard