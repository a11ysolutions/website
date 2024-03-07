import React from "react";
import Button from "../Button/Button";
import "./TryItNow.css";
import ButtonRotatingBackgroundGradient from "../ButtonRotatingBackgroundGradient/ButtonRotatingBackgroundGradient";

function TryItNow({ text, subText, buttonText, handleNavigate, children }) {
  return (
    <div className="tryItNow">
      <div className="tryItNow-content">
        <div className="tryItNow-text">
          <h2>{text}</h2>
          <p>{subText}</p>
        </div>
        <ButtonRotatingBackgroundGradient
          ariaLabel={"Try now"}
          size="large"
          variant="dark"
          role="listitem"
          onClick={handleNavigate}
        >
          {buttonText}
        </ButtonRotatingBackgroundGradient>
        {/*<Button size="large" onClick={handleNavigate}>
          {buttonText}
  </Button>*/}
      </div>
      {children}
    </div>
  );
}

export default TryItNow;
