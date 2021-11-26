import React from "react";
import "./CheckCard.css";

function CheckCard({ children }) {
  return (
    <div className="check-card">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          columnGap: "18px",
        }}
      >
        <div
          className="check-card-ellipse"
        >
          <img
            src="check-sign.png"
            className="check-card-img"
            alt="check sign"
          ></img>
        </div>
        <div
          className="check-card-text-container"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default CheckCard;
