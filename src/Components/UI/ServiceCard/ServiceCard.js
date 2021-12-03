import React from "react"
import "./ServiceCard.css"
import Button from "../Button/Button"

function ServiceCard({ children, header, imgSrc, imgColor = "white", style, onClickButton, imgStyle }) {
    return (
        <div className="service-card-container" style={{ ...style }}>
            <div className="service-card" style={{ backgroundColor: imgColor, ...imgStyle }}>
                <img
                    alt={header}
                    src={imgSrc}
                    className="service-card-img"
                />
            </div>
            <div className="service-card-content">
                <h3>{header}</h3>
                <div className="service-card-text">
                    {children}
                </div>
                <div style={{ marginTop: "27px" }}>
                    <Button onClick={onClickButton}>Learn More</Button>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard