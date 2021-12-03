import React from "react"
import PresentationSign from "../UI/PresentationSign/PresentationSign"
import HomeIlustration from "../UI/HomeIlustration/HomeIlustration"
import Button from "../UI/Button/Button"
import "./Home.css"
import Clients from "../UI/Clients/Clients"
import Services from "../UI/Services/Services"
import Toolset from "../UI/Toolset/Toolset"
import Qualities from "../UI/Qualities/Qualities"
import { scrollToContactForm } from "../Utils/Utils"
import BicolorTitledText from "../UI/BicolorTitledText/BicolorTitledText"

function Home() {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className="a11y-home-presentation-container">
                <PresentationSign />
                <div style={{ alignSelf: "center", marginTop: "90px" }}>
                    <HomeIlustration />
                </div>
            </div>
            <div>
                <BicolorTitledText
                    color1="black"
                    color2="#0D9E71"
                    color1Text="Why"
                    color2Text="choose us?"
                >
                    <p>
                        Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea.
                    </p>
                    <Button onClick={scrollToContactForm}>Get in touch</Button>
                </BicolorTitledText>
            </div>
            <Qualities />
            <Clients />
            <BicolorTitledText
                color1="black"
                color2="#0D9E71"
                color1Text="Our"
                color2Text="services">
                <p>
                    Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna.
                    </p>
            </BicolorTitledText>

            <Services />
            <Toolset />
        </div>
    )
}

export default Home