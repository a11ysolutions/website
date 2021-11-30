import React from "react";
import AchievementCard from "../UI/AchievementCard/AchievementCard";
import FunctionalPresentationSign from "../UI/FunctionalPresentationSign/FunctionalPresentationSign";
import FunctionalIlustration from "../UI/FunctionalIlustration/FunctionalIlustration";
import Button from "../UI/Button/Button";
import Toolset from "../UI/Toolset/Toolset";
import CheckCard from "../UI/CheckCard/CheckCard";
import TestingServicesCard from "../UI/TestingServicesCard/TestingServicesCard";
import { MdBugReport } from "react-icons/md";
import { IoExtensionPuzzle, IoPersonCircle } from "react-icons/io5";
import { AiOutlineSync } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import { FaClipboardList, FaSearchPlus } from "react-icons/fa";
import { BsShieldFillCheck } from "react-icons/bs";
import "./Functional.css";
import { scrollToContactForm } from "../Utils/Utils";

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
          Without consistently delivering a quality experience, brands and
          enterprises can’t fully guarantee customer satisfaction. <br></br>
          We help development teams deliver exceptional products at speed with the best
          customer experience. Our functional testing process is built around
          your needs, and we integrate with the tools you already use.
        </p>
        <Button onClick={scrollToContactForm}>Get in touch</Button>
      </div>

      <div className="intermediate-image">
        <div className="functional-large-circle">
          <img src="desktop-two-monitors.png" alt="desktop"></img>
        </div>
        <div>
          <div className="functional-small-circle"></div>
        </div>
      </div>

      <div className="functional-header-text-button">
        <h1>
          What can{" "}
          <span style={{ color: "#0D9E71" }}>
            we help <br></br>you achieve <br></br>
          </span>
          today? <br></br>
        </h1>
        <div className="functional-titles">
          <p>
            ELEVATE YOUR DIGITAL <br></br>
            EXPERIENCE WITH UNBEATABLE <br></br>
            QUALITY AND COVERAGE
          </p>
        </div>
        <div style={{ marginTop: "18px" }}>
          <CheckCard>
            <p>
              Scale your device coverage testing using real-world different
              devices, screen resolutions, browsers, and platforms, with no
              emulators.
            </p>
          </CheckCard>
        </div>
        <div style={{ marginTop: "18px" }}>
          <CheckCard>
            <p>
              Every defect is manually reproduced, verified, and categorized by
              severity, to allow rapid fixes.
            </p>
          </CheckCard>
        </div>
        <div style={{ marginTop: "18px" }}>
          <CheckCard>
            <p>
              Bring your internal teams together and improve your working
              practices across the entire SDLC.
            </p>
          </CheckCard>
        </div>
        <div style={{ marginTop: "18px" }}>
          <CheckCard>
            <p>
              Detailed issue reports integrate seamlessly into your own
              platform(s).
            </p>
          </CheckCard>
        </div>
        <Button onClick={scrollToContactForm}>Get in touch</Button>
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
      <div className="functional-header-text-button">
        <div className="functional-titles">
          <p>
            DELIVER GLOBAL RELEASES <br></br>
            THAT DELIGHT USERS
          </p>
        </div>
        <div style={{ marginTop: "18px" }}>
          <CheckCard>
            <p>
              Improve customer satisfaction earning the trust and satisfaction
              of international users by ensuring bugs don’t affect their
              interactions with your brand and products.
            </p>
          </CheckCard>
        </div>
        <div style={{ marginTop: "18px" }}>
          <CheckCard>
            <p>
              Understand bug impact on local users ensuring end-users feel as
              though the products you deliver were built for them.
            </p>
          </CheckCard>
        </div>
        <div style={{ marginTop: "18px" }}>
          <CheckCard>
            <p>
              Test with real users on real devices for real results ensuring a
              consistent user experience for all end-users giving you a
              competitive edge in the oversaturated app market.
            </p>
          </CheckCard>
        </div>
        <div style={{ marginTop: "40px" }}>
          <Button onClick={scrollToContactForm}>Get in touch</Button>
        </div>
      </div>
      <div className="intermediate-image">
        <div className="functional-large-circle">
          <img src="man-typing.png" alt="desktop"></img>
        </div>
        <div>
          <div className="functional-small-circle"></div>
        </div>
      </div>
      <div className="functional-header-text-button">
        <h1>
          <span style={{ color: "#0D9E71" }}>
            Functional<br></br>Testing Services<br></br>
          </span>
          We Offer
        </h1>
        <div style={{ marginTop: "18px" }}>
          <TestingServicesCard icon={<MdBugReport />}>
            <p>Smoke testing</p>
          </TestingServicesCard>
        </div>
        <div style={{ marginTop: "18px" }}>
          <TestingServicesCard icon={<IoExtensionPuzzle />}>
            <p>Module / Component testing</p>
          </TestingServicesCard>
        </div>
        <div style={{ marginTop: "18px" }}>
          <TestingServicesCard icon={<AiOutlineSync />}>
            <p>Regression testing</p>
          </TestingServicesCard>
        </div>
        <div style={{ marginTop: "18px" }}>
          <TestingServicesCard icon={<GoGear />}>
            <p>Integration testing</p>
          </TestingServicesCard>
        </div>
        <div style={{ marginTop: "18px" }}>
          <TestingServicesCard icon={<FaClipboardList />}>
            <p>Cross-platform testing</p>
          </TestingServicesCard>
        </div>
        <div style={{ marginTop: "18px" }}>
          <TestingServicesCard icon={<BsShieldFillCheck />}>
            <p>Sanity testing</p>
          </TestingServicesCard>
        </div>
        <div style={{ marginTop: "18px" }}>
          <TestingServicesCard icon={<IoPersonCircle />}>
            <p>UAT testing</p>
          </TestingServicesCard>
        </div>
        <div style={{ marginTop: "18px" }}>
          <TestingServicesCard icon={<FaSearchPlus />}>
            <p>Explorary testing</p>
          </TestingServicesCard>
        </div>
      </div>
      <div>
        <div style={{ position: "relative", marginTop: "25px" }}>
          <img src="man-typing-and-diagram.png" alt="man typing"></img>
        </div>
      </div>
      <Toolset />
    </div>
  );
}

export default Functional;
