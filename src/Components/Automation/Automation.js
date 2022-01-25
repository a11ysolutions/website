import React from "react"
import BicolorTitledText from "../UI/BicolorTitledText/BicolorTitledText"
import Button from "../UI/Button/Button"
import CheckedItem from "../UI/CheckedItem/CheckedItem"
import Illustration from "../UI/Illustration/Illustration"
import Presentation from "../UI/Presentation/Presentation"
import Toolset from "../UI/Toolset/Toolset"

import { FiTrendingDown } from "react-icons/fi"
import { AiFillCheckCircle, AiFillStar } from "react-icons/ai"
import { FaClipboardList } from "react-icons/fa"
import { GiAlarmClock } from "react-icons/gi"


import "./Automation.css";
import { scrollToContactForm } from "../Utils/Utils"
// import { scrollToContactForm } from "../Utils/Utils"


const TRENDING_ICON = <FiTrendingDown className="checked-item-icon" />;
const CHECKED_ICON = <AiFillCheckCircle className="checked-item-icon" />;
const STAR_ICON = <AiFillStar className="checked-item-icon" />;
const CLIPBOARD_ICON = <FaClipboardList className="checked-item-icon" />;
const ALARM_ICON = <GiAlarmClock className="checked-item-icon" />;

function Automation() {
    return (
        <div id='automation-main' className='page-container' >
            {/* <div className="presentation-circle-1"></div> */}

            <div className="page-top">
                <Presentation
                    title="Accelerate Automation with us"
                    texts={[
                        "The tools and teams you need for",
                        "simple, scalable test automation and",
                        "faster speed to market"
                    ]}
                    buttonText="Get a free consultation" />

            </div>
            <Illustration
                pillText="Automation"
                imgSrc={window.innerWidth >= 768 ? "/working-code@2x.png" : "/working-code.png"}
                containerStyle={{ position: "relative", marginTop: "50px" }}
                pillPositionClass="pill-position"
            />

            <section className="info-with-image automation-section first-info">
                <div className="checked-info">
                    <BicolorTitledText
                        color1="#0D9E71"
                        color2="black"
                        color1Text="Scalable test"
                        color2Text="automation"
                        className="checked-info-header"
                    >
                        Our test automation engineers will put your testing on the automation footing
                        to find more defects in less time. We do this in order to:
                    </BicolorTitledText>

                    <CheckedItem>Effectively develop test scripts</CheckedItem>
                    <CheckedItem>Thoroughly assess every test cycle</CheckedItem>
                    <CheckedItem>Produce better software and faster</CheckedItem>
                    <CheckedItem>Build test automation environment rapidly</CheckedItem>

                    <Button onClick={scrollToContactForm}
                        className="automation"
                    >Get in touch</Button>
                </div>

                <div className="intermediate-image a11y-img-combo">
                    <div className="automation-first-encircled-img">
                        <img src="/tablet-unpash.png" alt="" className="automation-first-image" />
                    </div>
                    <div className="automation-first-blurred-circle"></div>
                </div>
            </section>

            <section className="info-with-image automation-section second-info">
                <div className="checked-info">
                    <BicolorTitledText
                        color1="#0D9E71"
                        color2="black"
                        color1Text="Faster speed"
                        color2Text="to market"
                        className="checked-info-header"
                    >
                        We prepare the right test environment to smoothly run test cases for all targeted platforms,
                        devices, and browsers and ensure appropriate resource monitoring in order to deliver your products faster.
                        Key benefits we offer to you are:
                    </BicolorTitledText>

                    <CheckedItem>Our test automation engineers create re-usable high-level application-specific libraries to reduce testing time and costs.</CheckedItem>
                    <CheckedItem>We run tests after every change in your software which will help you to deliver new product features even more quickly and efficiently while not compromising on software quality.</CheckedItem>
                    <CheckedItem>We help you to get away from slow releases and defects found in production.</CheckedItem>
                    <CheckedItem>With our help, you will become Proactive instead of Reactive</CheckedItem>

                    <Button onClick={scrollToContactForm}
                        className="automation"
                    >Get in touch</Button>
                </div>

                <div className="intermediate-image a11y-img-combo">
                    <img src="/women-with-mobile.png" alt="" className="automation-second-image" />
                    <div className="automation-second-image-container">
                        <img src="/laptop-and-tablet.png" alt="" className="automation-third-image" />
                        <img src="/laptop-and-screen.png" alt="" className="automation-fourth-image" />
                    </div>
                    <div className="automation-second-circle-container">
                        <div className="automation-second-circle" ></div>
                        <div className="automation-second-blurred-circle"></div>
                    </div>
                </div>
            </section>

            <section className="info-with-image automation-section">
                <div className="checked-info">
                    <BicolorTitledText
                        color1="#0D9E71"
                        color2="black"
                        color1Text="Ensure better"
                        color2Text="quality"
                        className="checked-info-header"
                    >
                        We will catch every bug! After your team deploys any fix/update to your code, our regression tests come into play.
                        Our expertise will help you with
                    </BicolorTitledText>

                    <CheckedItem>Schedule your Test Execution 24/7</CheckedItem>
                    <CheckedItem>Easy Regression Testing</CheckedItem>
                    <CheckedItem>Powerful Test Reports</CheckedItem>
                    <CheckedItem>Ability to Perform Testing on Multiple Platforms in Parallel</CheckedItem>
                    <CheckedItem>Maximize the Test Coverage</CheckedItem>
                    <CheckedItem>Scalability</CheckedItem>


                    <Button onClick={scrollToContactForm}
                        className="automation"
                    >Get in touch</Button>
                </div>


                <div className="intermediate-image a11y-img-combo">
                    <div className="automation-first-encircled-img">
                        <img src="/laptop-with-code.png" alt="" className="automation-first-image" />
                    </div>
                    <div className="automation-first-blurred-circle"></div>
                </div>
            </section>


            <section className="shadowed-section">
                <section className="info-with-image automation-section">
                    <div className="checked-info">
                        <BicolorTitledText
                            color1="#0D9E71"
                            color2="black"
                            color1Text="Key Benefits"
                            color2Text="we offer"
                        ></BicolorTitledText>

                        <div className="checked-items">
                            <div>
                                <CheckedItem icon={TRENDING_ICON} >Reduce Regression Cost</CheckedItem>
                                <CheckedItem icon={CHECKED_ICON}>Better Testing Quality</CheckedItem>
                                <CheckedItem icon={STAR_ICON}>Better Resource utilization</CheckedItem>
                            </div>
                            <div className="second-section-items">
                                <CheckedItem icon={CLIPBOARD_ICON}>Multi-platform testing</CheckedItem>
                                <CheckedItem icon={ALARM_ICON}>Faster time to market</CheckedItem>
                            </div>
                        </div>
                    </div>

                    <div className="last-image">
                        <div className="automation-third-circle-container">
                            <div className="automation-third-circle"></div>
                            <div className="automation-third-blurred-circle"></div>
                            <div className="automation-fourth-circle" ></div>
                        </div>
                        <img src="/programmer.png" alt="" className="automation-fith-image" />
                    </div>
                </section>
            </section>

            <Toolset />
        </div>
    )
}

export default Automation