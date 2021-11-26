import React from "react";
import Button from "../Button/Button";
import "./Presentation.css";

function Presentation({title, texts, buttonText}) {
  return (
    <div className="presentation-main">
        <h1>{title}</h1>

        {
            texts.map((text, index) => {
                return (
                    <text
                    key={index}
                    >
                    {text}
                    </text>
                )
            })
        }    
        <Button size="large" style={{ marginTop: "24px" }}>
        Get a free consultation
        </Button>
    </div>
  );
}

export default Presentation;
