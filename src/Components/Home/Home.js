import React from "react"
import PresentationSign from "../UI/PresentationSign/PresentationSign"
import HomeIlustration from "../UI/HomeIlustration/HomeIlustration"
import Button from "../UI/Button/Button"
import "./Home.css"
import Clients from "../UI/Clients/Clients"
import Services from "../UI/Services/Services"

function Home() {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ marginTop: "247px" }}>
                <PresentationSign />
                <div style={{ alignSelf: "center", marginTop: "90px" }}>
                    <HomeIlustration />
                </div>
            </div>
            <div className="home-header-text-button">
                <h1>Why <span style={{ color: "#0D9E71" }}>choose us</span> ?</h1>
                <p>
                    Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea.
                    </p>
                <Button>Get in touch</Button>
            </div>

            <Clients />
            <div className="home-header-text-button">
                <h1>Our <span style={{ color: "#0D9E71" }}>services</span></h1>
                <p>
                    Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna.
                    </p>
            </div>
            <Services />
            <div
                className="home-header-text-button"
                style={{ marginTop: "139px" }}
            >
                <h1>Our <span style={{ color: "#0D9E71" }}>toolset</span></h1>
                <p>
                    Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea.
                    </p>
                <Button size="large">Get a free consultation</Button>
            </div>
        </div>
    )
}

export default Home