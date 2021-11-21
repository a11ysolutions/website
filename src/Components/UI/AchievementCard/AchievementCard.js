import React from "react"
import './AchievementCard.css'

function AchievementCard({ children, imgSrc }) {
    return (
        <div className="achievement-card">
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", columnGap: "18px" }}>
                <div className='achievement-card-ellipse' style={{justifyContent: "center", alignItems: "center"}}>
                    <img src={imgSrc} className='achievement-card-img'></img>
                </div>
                <div className='achievement-card-text-container' style={{justifyContent: "center", alignItems: "center"}}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AchievementCard;