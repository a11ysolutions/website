import React from "react"
import PresentationSign from "../UI/PresentationSign/PresentationSign"
import HomeIlustration from "../UI/HomeIlustration/HomeIlustration"
import Button from "../UI/Button/Button"
import "./Home.css"
import Clients from "../UI/Clients/Clients"
import Services from "../UI/Services/Services"
import Toolset from "../UI/Toolset/Toolset"
import Qualities from "../UI/Qualities/Qualities"

function Home() {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ marginTop: "135px" }}>
                <PresentationSign />
                <div style={{ alignSelf: "center", marginTop: "90px" }}>
                    <HomeIlustration />
                </div>
            </div>
            <div className="home-header-text-button" id="why-choose-us">
                <h1>Why <span style={{ color: "#0D9E71" }}>choose us</span> ?</h1>
                <p>
                    Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea.
                    </p>
                <Button>Get in touch</Button>
            </div>
            <Qualities />
            <Clients />
            <div className="home-header-text-button" id="our-services">
                <h1>Our <span style={{ color: "#0D9E71" }}>services</span></h1>
                <p>
                    Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna.
                    </p>
            </div>
            <Services />
            <Toolset />
        </div>
    )
}

export default Home