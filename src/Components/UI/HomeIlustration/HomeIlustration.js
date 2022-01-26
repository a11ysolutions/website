import React from "react"
import Pill from "../Pill/Pill"
import "./HomeIlustration.css"

function HomeIlustration({ firstPillText, secondPillText, thirdPillText }) {
    return (
        <div className="home-ilustration-container">
            <div style={{ position: "relative", marginTop: "50px" }}>
                <img
                    src="/coding-man@2x.png"
                    className="home-ilustration"
                    alt="man typing"
                    style={{ zIndex: "2" }}
                />

                {firstPillText &&
                    <Pill className="home-ilustration-functionality-pill">
                        {firstPillText}
                    </Pill>}
                {secondPillText &&
                    <Pill
                        className="home-ilustration-accessibility-pill"
                        dotPosition="top-right">
                        {secondPillText}
                    </Pill>}
                {thirdPillText &&
                    <Pill
                        className="home-ilustration-automation-pill"
                        dotPosition="top-left">
                        {thirdPillText}
                    </Pill>}
                <div className="home-ilustration-small-circle"></div>
                <div style={{ width: "100%" }}>
                    <div className="home-ilustration-large-circle"></div>
                </div>
            </div>
        </div>
    )
}

export default HomeIlustration