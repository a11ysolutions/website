import React from "react";
import Pill from "../Pill/Pill";
import "./Illustration.css";

function Illustration({pillText, imgSrc, containerStyle, pillPosition}) {
  return (
    <div className="illustration-container">  
        <div className="illustration-main">
            <div style={containerStyle}>
                <img
                src={imgSrc}
                className="illustration"
                alt="desktop"
                />

                <Pill position={pillPosition}>{pillText}</Pill>
                <div className="illustration-small-circle"></div>
                <div className="illustration-large-circle"></div>
            </div>
        </div>
    </div>
    
  );
}

export default Illustration;
