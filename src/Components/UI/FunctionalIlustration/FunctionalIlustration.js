import React from "react";
import Pill from "../Pill/Pill";
import "./FunctionalIlustration.css";

function FunctionalIlustration() {
  return (
    <div className="functional-ilustration-container">
      <div style={{ position: "relative", marginTop: "50px" }}>
        <img
          src="/desktop.png"
          className="functional-ilustration"
          alt="desktop"
        />

        <Pill position={{ top: "-40px", left: "170px" }}>Functionality</Pill>
        <div className="functional-ilustration-small-circle"></div>
        <div className="functional-ilustration-large-circle"></div>
      </div>
    </div>
  );
}

export default FunctionalIlustration;
