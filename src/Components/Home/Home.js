import React, { Fragment, useEffect } from "react"
import PresentationSign from "../UI/PresentationSign/PresentationSign"
import HomeIlustration from "../UI/HomeIlustration/HomeIlustration"
import "./Home.css"
import Clients from "../UI/Clients/Clients"
import Services from "../UI/Services/Services"
import Toolset from "../UI/Toolset/Toolset"
import Qualities from "../UI/Qualities/Qualities"
import BicolorTitledText from "../UI/BicolorTitledText/BicolorTitledText"

function Home() {

    useEffect(() => {
        const layout = document.querySelector(".layout-content");
        layout.style.padding = "0";
    }, [])
    return (
        <Fragment>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div className="a11y-home-presentation-container">
                    <PresentationSign />
                    <div className="home-page-ilustration-container">
                        <HomeIlustration />
                    </div>
                </div>

                <Qualities className="home-qualities" />

            </div>
            <Clients />

            <div className="home-our-services-section" id="our-services">

                <div className="home-services-bicolored-text">
                    <BicolorTitledText
                        color1="black"
                        color2="#0D9E71"
                        color1Text="Our"
                        color2Text="services"
                        className="home-our-services"
                    >
                        <p>
                            We provide more than services, <br />
                            we provide opportunities to make your product better<br />
                            and not only maintain but also attract new users.
                        </p>
                    </BicolorTitledText>
                </div>
                <Services />
            </div>
            <Toolset />
        </Fragment>
    )
}

export default Home