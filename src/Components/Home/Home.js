import React from "react"
import PresentationSign from "../UI/PresentationSign/PresentationSign"
import HomeIlustration from "../UI/HomeIlustration/HomeIlustration"
import "./Home.css"
import Clients from "../UI/Clients/Clients"
import Services from "../UI/Services/Services"
import Toolset from "../UI/Toolset/Toolset"
import Qualities from "../UI/Qualities/Qualities"
import BicolorTitledText from "../UI/BicolorTitledText/BicolorTitledText"

function Home() {
    return (
        <div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div className="a11y-home-presentation-container">
                    <PresentationSign />
                    <div style={{ alignSelf: "center", marginTop: "90px" }}>
                        <HomeIlustration />
                    </div>
                </div>

                <Qualities />
                <Clients />

            </div>
            <div className="home-our-services-section">

                <BicolorTitledText
                    color1="black"
                    color2="#0D9E71"
                    color1Text="Our"
                    color2Text="services"
                >
                    <p>
                        Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna.
                    </p>
                </BicolorTitledText>
                <Services />
            </div>
            <Toolset />
        </div>
    )
}

export default Home