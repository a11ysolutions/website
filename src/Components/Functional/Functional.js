import React from "react"
import AchievementCard from "../UI/AchievementCard/AchievementCard"

function Functional() {
    return (
        <div>
            <AchievementCard>
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
            </AchievementCard>
        </div>
    )
}

export default Functional