import React from "react";
import "./TestingServicesCard.css";

function TestingServicesCard({ children, icon }) {
  return (
    <div className="testing-services-card">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          columnGap: "18px",
        }}
      >
        <div
          className="testing-services-card-square"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <div>{icon}</div>
        </div>
        <div
          className="testing-services-card-text-container"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default TestingServicesCard;
