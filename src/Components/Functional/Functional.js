import React from "react";
import AchievementCard from "../UI/AchievementCard/AchievementCard";
import BicolorTitledText from "../UI/BicolorTitledText/BicolorTitledText"
import Presentation from "../UI/Presentation/Presentation"
import Illustration from "../UI/Illustration/Illustration"
import Button from "../UI/Button/Button";
import Toolset from "../UI/Toolset/Toolset";
import CheckedItem from "../UI/CheckedItem/CheckedItem"

import { Helmet } from "react-helmet";
import { MdBugReport } from "react-icons/md";
import { IoExtensionPuzzle, IoPersonCircle } from "react-icons/io5";
import { AiOutlineSync } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import { FaClipboardList, FaSearchPlus } from "react-icons/fa";
import { BsShieldFillCheck } from "react-icons/bs";

import "./Functional.css";
import { scrollToContactForm } from "../Utils/Utils";


const BUG_ICON = <MdBugReport size="28" role="img" aria-hidden="true"/>;
const PUZZLE_ICON = <IoExtensionPuzzle size="25" role="img" aria-hidden="true"/>;
const PERSON_ICON = <IoPersonCircle size="25" role="img" aria-hidden="true"/>;
const SYNC_ICON = <AiOutlineSync size="28" role="img" aria-hidden="true"/>;
const GEAR_ICON = <GoGear size="28" role="img" aria-hidden="true"/>;
const CLIPBOARD_ICON = <FaClipboardList size="28" role="img" aria-hidden="true"/>;
const SEARCH_ICON = <FaSearchPlus size="25" role="img" aria-hidden="true"/>;
const SHIELD_ICON = <BsShieldFillCheck size="25" role="img" aria-hidden="true"/>;

function Functional() {
  return (
    <div id='functional-main' className='page-container' >
      <Helmet>
        <title>
          Functional testing services | A11ysolutions
        </title>
      </Helmet>

      <div className="page-top">
        <Presentation
          title="Scalable Functional Testing Services"
          texts={[
            "Discover how you can instantly and",
            "effortlessly find the bugs impacting",
            "your users enabling you to release",
            "high-quality at speed."
          ]}
          buttonText="Get a free consultation" />
      </div>

      <Illustration
        pillText="Functionality"
        imgSrc={window.innerWidth >= 768 ? "/desktop@2x.png" : "/desktop.png"}
        containerStyle={{ position: "relative", marginTop: "60px" }}
        pillPositionClass="functional-pill-position"
      />

      <section className="functional-info-with-image first-info">
        <div className="functional-checked-info">
          <BicolorTitledText
            color1="#0D9E71"
            color2="black"
            color1Text="Our expert advice can help you"
            color2Text="solve your QA bottlenecks"
            className="functional-checked-info-header"
          >
            <p>Without consistently delivering a quality
              experience, brands and enterprises can’t fully
              guarantee customer satisfaction.<br></br><br></br>

              We help development teams deliver
              exceptional products at speed with the best
              customer experience. Our functional testing
              process is built around your needs, and we
              integrate with the tools you already use.</p>
          </BicolorTitledText>

          <Button
            className="automation"
            onClick={scrollToContactForm}
          >Get in touch</Button>
        </div>

        <div className="functional-intermediate-image">
          <div className="functional-first-encircled-img">
            <img src="/desktop-two-monitors.png" alt="" className="functional-first-image" />
          </div>
          <div className="functional-first-blurred-circle"></div>
          <div className="functional-fourth-blurred-circle"></div>
        </div>
      </section>

      <section className="functional-info-with-image second-info">
        <div className="functional-checked-info">
          <BicolorTitledText
            color1="#0D9E71"
            color2="black"
            color1Text="What can we help"
            color2Text="you achieve today?"
            className="functional-checked-info-header"
          >
            <div className='functional-explanation-header'>
              <h3>ELEVATE YOUR DIGITAL EXPERIENCE WITH UNBEATABLE QUALITY AND COVERAGE</h3>
            </div>
          </BicolorTitledText>

          <div className='bicolor-titled-container' role="list">
            <CheckedItem>Scale your device coverage testing using real-world different devices, screen resolutions, browsers, and platforms, with no emulators.</CheckedItem>
            <CheckedItem>Every defect is manually reproduced, verified, and categorized by severity, to allow rapid fixes.</CheckedItem>
            <CheckedItem>Bring your internal teams together and improve your working practices across the entire SDLC.</CheckedItem>
            <CheckedItem>Detailed issue reports integrate seamlessly into your own platform(s).</CheckedItem>
          </div>

          <Button
            className="automation"
            onClick={scrollToContactForm}
          >Get in touch</Button>

        </div>

        <div className="functional-intermediate-image">
          <img src="/coding-man.png" alt="" className="functional-second-image" />
          <div className="functional-second-image-container">
            <img src="/computer-plant.png" alt="" className="functional-third-image" />
            <img src="/hand-bar.png" alt="" className="functional-fourth-image" />
          </div>
          <div className="functional-second-circle-container">
            <div className="functional-second-circle" ></div>
            <div className="functional-second-blurred-circle"></div>
          </div>
        </div>
      </section>

      <section className="functional-info-with-image second-info">
        <div className="functional-circles-container">
          <div className="functional-right-circle"></div>
          <div className="functional-left-circle"></div>
        </div>

        <div className="functional-checked-info">
          <BicolorTitledText
            color1="#0D9E71"
            color2="black"
            color1Text=""
            color2Text=""
          >
            <div className='functional-second-explanation-header'>
              <h3>UNLIMITED SCALE, AT SPEED</h3>
            </div>
          </BicolorTitledText>

          <div className='functional-qualities-top-section' role={'list'}>
            <div className="card-subgroup">
              <AchievementCard imgSrc="folder-data.svg">
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Fully verified and reviewed results
                  </span>{" "}
                  within hours, with no extra triage required.
                </p>
              </AchievementCard>

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

            <div className="card-subgroup">
              <AchievementCard imgSrc="searching.svg">
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Test overnight, weekends included,
                  </span>{" "}
                  thanks to our vetted global community of professional testers.
                </p>
              </AchievementCard>

              <AchievementCard imgSrc="verification.svg">
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Remove any potential QA bottlenecks
                  </span>{" "}
                  by speeding up your testing workflow.
                </p>
              </AchievementCard>
            </div>
          </div>
        </div>
      </section>

      <section className="functional-info-with-image second-info">
        <div className="functional-checked-info">
          <BicolorTitledText
            color1="#0D9E71"
            color2="black"
            color1Text=""
            color2Text=""
          >
            <div className='functional-explanation-header'>
              <h3>DELIVER GLOBAL RELEASES THAT DELIGHT USERS</h3>
            </div>
          </BicolorTitledText>

          <div className='bicolor-titled-container' role="list">
            <CheckedItem>Improve customer satisfaction earning the trust and satisfaction of international users by ensuring bugs don’t affect their interactions with your brand and products.</CheckedItem>
            <CheckedItem>Understand bug impact on local users ensuring end-users feel as though the products you deliver were built for them.</CheckedItem>
            <CheckedItem>Test with real users on real devices for real results ensuring a consistent user experience for all end-users giving you a competitive edge in the oversaturated app market.</CheckedItem>
          </div>

          <Button
            className="automation"
            onClick={scrollToContactForm}
          >Get in touch</Button>

        </div>
        <div className="functional-intermediate-image">
          <div className="functional-first-encircled-img">
            <img src="/man-typing.png" alt="" className="functional-first-image" />
          </div>
          <div className="functional-fifth-blurred-circle"></div>
        </div>
      </section>

      <section className="functional-info-with-image shadowed-section">
        <div className="functional-checked-info">
          <BicolorTitledText
            color1="#0D9E71"
            color2="black"
            color1Text="Functional Testing Services"
            color2Text="We Offer"
          ></BicolorTitledText>

          <div className='checked-items' role="list">
            <div>
              <CheckedItem icon={BUG_ICON} >Smoke testing</CheckedItem>
              <CheckedItem icon={PUZZLE_ICON}>Module / Component testing</CheckedItem>
              <CheckedItem icon={SYNC_ICON}>Regression testing</CheckedItem>
              <CheckedItem icon={GEAR_ICON}>Integration testing</CheckedItem>
            </div>
            <div>
              <CheckedItem icon={CLIPBOARD_ICON}>Cross- platform testing</CheckedItem>
              <CheckedItem icon={SHIELD_ICON}>Sanity testing</CheckedItem>
              <CheckedItem icon={PERSON_ICON}>UAT testing</CheckedItem>
              <CheckedItem icon={SEARCH_ICON}>Explorary testing</CheckedItem>
            </div>
          </div>
        </div>

        <div className="last-image">
          <div className="functional-third-circle-container">
            <div className="functional-third-circle"></div>
            <div className="functional-third-blurred-circle"></div>
            <div className="functional-fourth-circle" ></div>
          </div>
          <img src="/man-typing-and-diagram.png" alt="" className="functional-fith-image" />
        </div>
      </section>

      <Toolset />
    </div>
  );
}

export default Functional;
