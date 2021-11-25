import React from "react"
import BicolorTitledText from "../UI/BicolorTitledText/BicolorTitledText"
import Button from "../UI/Button/Button"
import CheckedItem from "../UI/CheckedItem/CheckedItem"
import Illustration from "../UI/Illustration/Illustration"
import Presentation from "../UI/Presentation/Presentation"
import Toolset from "../UI/Toolset/Toolset"

import {FiTrendingDown} from "react-icons/fi"
import {AiFillCheckCircle, AiFillStar} from "react-icons/ai"
import {FaClipboardList} from "react-icons/fa"
import {GiAlarmClock} from "react-icons/gi"


import "./Automation.css";


const TRENDING_ICON = <FiTrendingDown className="checked-item-icon"/>;
const CHECKED_ICON = <AiFillCheckCircle className="checked-item-icon"/>;
const STAR_ICON = <AiFillStar className="checked-item-icon"/>;
const CLIPBOARD_ICON = <FaClipboardList className="checked-item-icon"/>;
const ALARM_ICON = <GiAlarmClock className="checked-item-icon"/>;

function Automation() {
    return (
        <div id='automation-main' className='page-container' >
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
                imgSrc="./working-code.png"
                containerStyle={{ position: "relative", marginTop: "50px" }}
                pillPosition={{ top: "-40px", left: "170px" }}
            />

            <BicolorTitledText
                color1="#0D9E71"
                color2="black"
                color1Text="Scalable test"
                color2Text="automation"
            >
                Our test automation engineers will put your testing on the automation footing
                to find more defects in less time. We do this in order to:
            </BicolorTitledText>

            <CheckedItem>Effectively develop test scripts</CheckedItem>
            <CheckedItem>Thoroughly assess every test cycle</CheckedItem>
            <CheckedItem>Produce better software and faster</CheckedItem>
            <CheckedItem>Build test automation environment rapidly</CheckedItem>

            <Button
                style={{
                    alignSelf: "start",
                    marginTop: "30px",
                    marginLeft: "20px"
                }}
            >Get in touch</Button>

            <div className="intermediate-image">
                <div className="automation-first-encircled-img">
                    <img src="./tablet-unpash.png" alt="Using a tablet" className="automation-first-image"/>
                </div>
                <div className="automation-first-blurred-circle"></div>
            </div>

            <BicolorTitledText
                color1="#0D9E71"
                color2="black"
                color1Text="Faster speed"
                color2Text="to market"
            >
                We prepare the right test environment to smoothly run test cases for all targeted platforms,
                devices, and browsers and ensure appropriate resource monitoring in order to deliver your products faster.
                Key benefits we offer to you are:
            </BicolorTitledText>

            <CheckedItem>Our test automation engineers create re-usable high-level application-specific libraries to reduce testing time and costs.</CheckedItem>
            <CheckedItem>We run tests after every change in your software which will help you to deliver new product features even more quickly and efficiently while not compromising on software quality.</CheckedItem>
            <CheckedItem>We help you to get away from slow releases and defects found in production.</CheckedItem>
            <CheckedItem>With our help, you will become Proactive instead of Reactive</CheckedItem>

            <Button
                style={{
                    alignSelf: "start",
                    marginTop: "30px",
                    marginLeft: "20px"
                }}
            >Get in touch</Button>

            <div className="intermediate-image">
                <img src="./women-with-mobile.png" alt="Woman using a mobile and smiling" className="automation-second-image"/>
                <div className="automation-second-image-container">
                    <img src="./laptop-and-tablet.png" alt="A laptop and a tablet" className="automation-third-image"/>
                    <img src="./laptop-and-screen.png" alt="A laptop and a computer screen" className="automation-fourth-image"/>
                </div>
                <div className="automation-second-circle-container">
                    <div className="automation-second-circle" ></div>
                    <div className="automation-second-blurred-circle"></div>
                </div>
            </div>

            <BicolorTitledText
                color1="#0D9E71"
                color2="black"
                color1Text="Ensure better"
                color2Text="quality"
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


            <Button
                style={{
                    alignSelf: "start",
                    marginTop: "30px",
                    marginLeft: "20px"
                }}
            >Get in touch</Button>


            <div className="intermediate-image">
                <div className="automation-first-encircled-img">
                    <img src="./laptop-with-code.png" alt="A laptop with programming code written" className="automation-first-image"/>
                </div>
                <div className="automation-first-blurred-circle"></div>
            </div>
            

            <section style={{width: "100%", padding: "20px", marginTop: "50px", backgroundColor: "#AAAAAA19"}}> 
                <BicolorTitledText
                    color1="#0D9E71"
                    color2="black"
                    color1Text="Functional Testing Services"
                    color2Text="We Offered"
                ></BicolorTitledText>

                <CheckedItem icon={TRENDING_ICON} >Reduce Regression Cost</CheckedItem>
                <CheckedItem icon={CHECKED_ICON}>Better Testing Quality</CheckedItem>
                <CheckedItem icon={STAR_ICON}>Better Resource utilization</CheckedItem>
                <CheckedItem icon={CLIPBOARD_ICON}>Multi-platform testing</CheckedItem>
                <CheckedItem icon={ALARM_ICON}>Faster time to market</CheckedItem>

                <div className="last-image">
                    <div className="automation-third-circle-container">
                        <div className="automation-third-circle"></div>
                        <div className="automation-third-blurred-circle"></div>
                        <div className="automation-fourth-circle" ></div>
                    </div>
                    <img src="./programmer.png" alt="A programmer working in a computer" className="automation-fith-image"/>
                </div>
            </section>

            <Toolset/>
                
        </div>
    )
}

export default Automation