import React from "react";
import "./AchievementCard.css";

function AchievementCard({ children, imgSrc, className }) {
  return (
    <div className={"achievement-card " + className} role="listitem">
      <div>
        <div className="achievement-card-ellipse">
          <img
            src={imgSrc}
            className="achievement-card-img"
            alt="card icon"
          />
        </div>

      </div>
      <div
        className="achievement-card-text-container"
      >
        {children}
      </div>
    </div>
  );
}

export default AchievementCard;
