import React from "react"
import AchievementCard from "../AchievementCard/AchievementCard"
import "./Qualities.css"
import BicolorTitledText from "../BicolorTitledText/BicolorTitledText"
import { scrollToContactForm } from "../../Utils/Utils"
import Button from "../Button/Button"

function Qualities() {
    return (
        <div className="a11y-qualities" id="why-choose-us">
            <div className="why-choose-us-qualities">
                <BicolorTitledText
                    color1="black"
                    color2="#0D9E71"
                    color1Text="Why"
                    color2Text="choose us?"
                    className="home-why-choose-us"
                >
                    <p>
                        Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea.
                    </p>
                    <Button onClick={scrollToContactForm}>Get in touch</Button>
                </BicolorTitledText>
                <div className="qualities-circles-container">
                    <div className="qualities-right-circle"></div>
                    <div className="qualities-left-circle"></div>
                </div>
                <div className="a11y-qualities-top-section">
                    <AchievementCard imgSrc="/quality-assurance.png" className="qualities-quality-card">
                        <h3>Quality</h3>
                        <p>
                            Lorem ipsum dolor sit amet<br />
                            consectetur adipiscing elit, sed<br />
                            do eiusmod tempor.
                    </p>
                    </AchievementCard>
                    <AchievementCard imgSrc="/experience.png" className="qualities-experience-card">
                        <h3>Experience</h3>
                        <p>
                            Lorem ipsum dolor sit amet<br />
                            consectetur adipiscing elit, sed<br />
                            do eiusmod tempor.
                    </p>
                    </AchievementCard>
                </div>
            </div>
            <div className="a11y-qualities-section">
                <AchievementCard imgSrc="/growth.png">
                    <h3>Best/Fast Results</h3>
                    <p>
                        Lorem ipsum dolor sit amet<br />
                        consectetur adipiscing elit, sed<br />
                        do eiusmod tempor.
                    </p>
                </AchievementCard>
                <AchievementCard imgSrc="/passion.png">
                    <h3>Passion/Commitment</h3>
                    <p>
                        Lorem ipsum dolor sit amet<br />
                        consectetur adipiscing elit, sed<br />
                        do eiusmod tempor.
                    </p>
                </AchievementCard>
            </div>

        </div>
    )
}

export default Qualities