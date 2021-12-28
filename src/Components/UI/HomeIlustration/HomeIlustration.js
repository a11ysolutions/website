import React from "react"
import Pill from "../Pill/Pill"
import "./HomeIlustration.css"

function HomeIlustration() {
    return (
        <div className="home-ilustration-container">
            <div style={{ position: "relative", marginTop: "50px" }}>
                <img
                    src="/coding-man@2x.png"
                    className="home-ilustration"
                    alt="man typing"
                />

                <Pill className="home-ilustration-functionality-pill">
                    Functionality
                </Pill>
                <Pill
                    className="home-ilustration-accessibility-pill"
                    dotPosition="top-right">
                    Accessibility
                </Pill>
                <Pill
                    className="home-ilustration-automation-pill"
                    dotPosition="top-left">
                    Automation
                </Pill>
                <div className="home-ilustration-small-circle"></div>
                <div style={{ width: "100%" }}>
                    <div className="home-ilustration-large-circle"></div>
                </div>
            </div>
        </div>
    )
}

export default HomeIlustration