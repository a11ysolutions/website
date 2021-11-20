import React from "react"
import AchievementCard from "../UI/AchievementCard/AchievementCard"
import FunctionalPresentationSign from "../UI/FunctionalPresentationSign/FunctionalPresentationSign"
import HomeIlustration from "../UI/HomeIlustration/HomeIlustration"

function Functional() {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ marginTop: "135px" }}>
                <FunctionalPresentationSign />
                <div style={{ alignSelf: "center", marginTop: "90px" }}>
                    <HomeIlustration />
                </div>
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