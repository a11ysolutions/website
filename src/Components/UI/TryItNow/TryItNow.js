import React from "react";
import Button from "../Button/Button";
import "./TryItNow.css";

function TryItNow({ text, subText, buttonText, handleNavigate, children }) {
  return (
    <div className="tryItNow">
      <div className="tryItNow-content">
        <div className="tryItNow-text">
          <h2>{text}</h2>
          <p>{subText}</p>
        </div>
        <Button size="large" onClick={handleNavigate}>
          {buttonText}
        </Button>
      </div>
      {children}
    </div>
  );
}

export default TryItNow;
