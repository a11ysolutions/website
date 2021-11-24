import React from "react";
import Pill from "../Pill/Pill";
import "./Illustration.css";

function Illustration({pillText}) {
  return (
    <div className="illustration-container">  
        <div className="ilustration-main">
            <div style={{ position: "relative", marginTop: "50px" }}>
                <img
                src="/desktop.png"
                className="functional-ilustration"
                alt="desktop"
                />

                <Pill position={{ top: "-40px", left: "170px" }}>{pillText}</Pill>
                <div className="ilustration-small-circle"></div>
                <div className="ilustration-large-circle"></div>
            </div>
        </div>
    </div>
    
  );
}

export default Illustration;
