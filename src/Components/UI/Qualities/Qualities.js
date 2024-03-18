import React from "react";
import AchievementCard from "../AchievementCard/AchievementCard";
import "./Qualities.css";
import BicolorTitledText from "../BicolorTitledText/BicolorTitledText";
import { scrollToContactForm } from "../../Utils/Utils";
import Button from "../Button/Button";
import { ImageDivider } from "../../UI/ImageDivider/ImageDivider";

function Qualities({ className = "" }) {
  return (
    <div className={`a11y-qualities ${className}`} id="why-choose-us">
      <div className="why-choose-us-qualities">
        <BicolorTitledText
          color1="#ffffff"
          color2="#ffffff"
          color1Text="Why"
          color2Text="choose us?"
          className="home-why-choose-us"
        >
          <p>
            With us you will be proactive, instead of reactive, we will help you
            to prevent software defects and ease upcoming test design
            activities. With us, you will cover all the testing life cycles.
          </p>
          <Button variant="negative" onClick={scrollToContactForm}>
            Get in touch
          </Button>
        </BicolorTitledText>
        <div className="qualities-circles-container">
          <div className="qualities-right-circle"></div>
          <div className="qualities-left-circle"></div>
        </div>
        <div className="a11y-qualities-top-section" role="list">
          <AchievementCard
            imgSrc="/quality-assurance.png"
            className="qualities-quality-card"
          >
            <h3>Quality</h3>
            <p>
              We will ensure your product is implemented correctly, <br />
              helping you to take it to the top degree of excellence.
            </p>
          </AchievementCard>
          <AchievementCard
            imgSrc="/experience.png"
            className="qualities-quality-card"
          >
            <h3>Experience</h3>
            <p>
              We have the right experience you need, our testers engineers are
              ready to join your project at any phase of the software
              development life cycle, testing exactly what you need and when you
              need it.
            </p>
          </AchievementCard>
        </div>
      </div>
      <div className="a11y-qualities-section" role="list">
        <AchievementCard className="qualities-quality-card" imgSrc="/growth.png">
          <h3>Best/Fast Results</h3>
          <p>
            We will take care of your product's evolvement and accelerate
            engineering potential to achieve business growth in a cost-efficient
            way, helping you to obtain better and faster product results.
          </p>
        </AchievementCard>
        <AchievementCard className="qualities-quality-card" imgSrc="/passion.png">
          <h3>Passion/Commitment</h3>
          <p>
            Every new project drives our imagination and will to learn, we focus
            on getting to the very core of your business and assisting you to
            create market-dominant products.
          </p>
        </AchievementCard>
      </div>
      <ImageDivider top bottom variantTopGreen />
    </div>
  );
}

export default Qualities;
