import React from "react"
import AchievementCard from "../UI/AchievementCard/AchievementCard"
import FunctionalPresentationSign from "../UI/FunctionalPresentationSign/FunctionalPresentationSign"
import FunctionalIlustration from "../UI/FunctionalIlustration/FunctionalIlustration"
import Button from "../UI/Button/Button"
import "./Functional.css"

function Functional() {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ marginTop: "135px" }}>
                <FunctionalPresentationSign />
                <div style={{ alignSelf: "center", marginTop: "90px" }}>
                    <FunctionalIlustration />
                </div>
            </div>
            <div className="functional-header-text-button">
                <h1><span style={{ color: "#0D9E71" }}>Our expert advice <br></br>can help you <br></br></span>solve your QA <br></br>bottlenecks</h1>
                <p>
                    Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea.
                    </p>
                <Button>Get in touch</Button>
            </div>
            {/* <AchievementCard>
                <p>
                    <span style={{fontWeight: "bold"}}>Fully verified and reviewed
                    results</span> within hours, with no
                    extra triage required.
                </p>
            </AchievementCard>

            <AchievementCard>
                <p>
                <span style={{fontWeight: "bold"}}>Shift your in-house testing
                 workload to our 24/7/365</span> on-demand crowd to help you
                  scale and execute tests in <br></br> real-time.
                </p>
            </AchievementCard>

            <AchievementCard>
            <text>Fully verified and reviewed</text>
            <text> results within hours, with no</text>
            <text> extra triage required.</text>
            </AchievementCard> */}
        </div>
    )
}

export default Functional