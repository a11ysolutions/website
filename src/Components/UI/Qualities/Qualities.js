import React from "react"
import AchievementCard from "../AchievementCard/AchievementCard"
import "./Qualities.css"

function Qualities() {
    return (
        <div className="a11y-qualities">
            <AchievementCard imgSrc="/quality-assurance.png">
                <h3>Quality</h3>
                <p>
                    Lorem ipsum dolor sit amet<br />
                    consectetur adipiscing elit, sed<br />
                    do eiusmod tempor.
                </p>
            </AchievementCard>
            <AchievementCard imgSrc="/experience.png">
                <h3>Experience</h3>
                <p>
                    Lorem ipsum dolor sit amet<br />
                    consectetur adipiscing elit, sed<br />
                    do eiusmod tempor.
                </p>
            </AchievementCard>
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
    )
}

export default Qualities