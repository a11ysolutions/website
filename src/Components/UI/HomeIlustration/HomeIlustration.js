import React from "react"
import Pill from "../Pill/Pill"
import "./HomeIlustration.css"

function HomeIlustration() {
    return (
        <div className="home-ilustration-container">
            <div style={{ position: "relative", marginTop: "50px" }}>
                <img
                    src="/coding-man.png"
                    className="home-ilustration"
                    alt="man typing"
                />

                <Pill position={{ top: "-40px", left: "170px" }}>
                    Functionality
                </Pill>
                <Pill
                    position={{ top: "220px", right: "170px" }}
                    dotPosition="top-right">
                    Accessibility
                </Pill>
                <Pill
                    position={{ top: "320px", left: "170px" }}
                    dotPosition="top-left">
                    Automation
                </Pill>
                <div className="home-ilustration-small-circle"></div>
                <div className="home-ilustration-large-circle"></div>
            </div>
        </div>
    )
}

export default HomeIlustration