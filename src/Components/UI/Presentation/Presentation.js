import React from "react";
import Button from "../Button/Button";
import "./Presentation.css";
import { scrollToContactForm } from "../../Utils/Utils";

function Presentation({ title, texts, buttonText }) {

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
      <Button size="large" className='presentation-button' onClick={scrollToContactForm}>
        Get a free consultation
        </Button>
    </div>
  );
}

export default Presentation;
