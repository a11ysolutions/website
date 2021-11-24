import React from "react";
import AchievementCard from "../UI/AchievementCard/AchievementCard";
import FunctionalPresentationSign from "../UI/FunctionalPresentationSign/FunctionalPresentationSign";
import FunctionalIlustration from "../UI/FunctionalIlustration/FunctionalIlustration";
import Button from "../UI/Button/Button";
import Toolset from "../UI/Toolset/Toolset";
import "./Functional.css";

function Functional() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ marginTop: "135px" }}>
        <FunctionalPresentationSign />
        <div style={{ alignSelf: "center", marginTop: "90px" }}>
          <FunctionalIlustration />
        </div>
      </div>
      <div className="functional-header-text-button">
        <h1>
          <span style={{ color: "#0D9E71" }}>
            Our expert advice <br></br>can help you <br></br>
          </span>
          solve your QA <br></br>bottlenecks
        </h1>
        <p>
        Without consistently delivering a quality experience, 
        brands and enterprises can’t fully 
        guarantee customer satisfaction.

        We help development teams deliver 
        exceptional products at speed with the best 
        customer experience. Our functional testing 
        process is built around your needs, and we 
        integrate with the tools you already use.
        </p>
        <Button>Get in touch</Button>
      </div>
      <div style={{ marginTop: "135px" }}>
        <div className="functional-titles">UNLIMITED SCALE, AT SPEED</div>

        <div style={{ marginTop: "18px" }}>
          <AchievementCard imgSrc="folder-data.svg">
            <p>
              <span style={{ fontWeight: "bold" }}>
                Fully verified and reviewed results
              </span>{" "}
              within hours, with no extra triage required.
            </p>
          </AchievementCard>
        </div>
        <div style={{ marginTop: "18px" }}>
          <AchievementCard imgSrc="data-user.svg">
            <p>
              <span style={{ fontWeight: "bold" }}>
                Shift your in-house testing workload to our 24/7/365
              </span>{" "}
              on-demand crowd to help you scale and execute tests in <br></br>{" "}
              real-time.
            </p>
          </AchievementCard>
        </div>

        <div style={{ marginTop: "18px" }}>
          <AchievementCard imgSrc="verification.svg">
            <p>
              <span style={{ fontWeight: "bold" }}>
                Remove any potential QA bottlenecks
              </span>{" "}
              by sppeding up your testing workflow.
            </p>
          </AchievementCard>
        </div>
      </div>
      <Toolset />
    </div>
  );
}

export default Functional;
