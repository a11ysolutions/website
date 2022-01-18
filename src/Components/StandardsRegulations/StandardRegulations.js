import React, { useEffect } from 'react'
import BicolorTitledText from '../UI/BicolorTitledText/BicolorTitledText'
import Button from '../UI/Button/Button'
import CheckedItem from '../UI/CheckedItem/CheckedItem'
import FirmSamples from '../UI/FirmSamples/FirmSamples'
import VerticalCard from '../UI/VerticalCard/VerticalCard'
import { scrollToContactForm } from '../Utils/Utils'

import "./StandardRegulations.css";

function StandardRegulations() {

    useEffect(() => {
        const layout = document.querySelector(".layout-content");
        const topCircles = document.querySelector(".circles-container");

        layout.style.background = "white";
        topCircles.style.display = "none";
    }, [])

    return (
        <div className="page-container">
            
            <BicolorTitledText
                color1="black"
                color2="#0D9E71"
                color1Text="Web Accessibility"
                color2Text="Standards & Regulations"
                className="regulations"
            />

            <div className="vertical-cards-container">
                <div className='v-card-subgroup'>
                    <VerticalCard
                        title={"Americans with Disabilities Act (ADA)"}
                        imgUrl={"./ada-logo.svg"}
                        btnText={"Find out more"}
                        btnUrl={"https://www.ada.gov/"} 
                    >
                        The Americans with Disabilities Act of 1990 is a civil rights law that prohibits
                        discrimination based on disability. It affords similar protections against discrimination
                        to Americans with disabilities as the Civil Rights Act of 1964, which made discrimination
                        based on race, religion, sex, national origin, and other characteristics illegal.
                    </VerticalCard>
                    <VerticalCard
                        title={"Section 508 Amendment to the Rehabilitation Act"}
                        imgUrl={"./508-amendment.svg"}
                        btnText={"Find out more"}
                        btnUrl={"https://www.section508.gov/manage/laws-and-policies/"} 
                    >
                        The Americans with Disabilities Act of 1990 is a civil rights law that prohibits
                        discrimination based on disability. It affords similar protections against discrimination
                        to Americans with disabilities as the Civil Rights Act of 1964, which made discrimination
                        based on race, religion, sex, national origin, and other characteristics illegal.
                    </VerticalCard>
                </div>
                <div className='v-card-subgroup'>
                    <VerticalCard
                        title={"Web Content Accessibility Guidelines (WCAG)"}
                        imgUrl={"./wcag-logo.svg"}
                        btnText={"Find out more"}
                        btnUrl={"https://www.w3.org/TR/WCAG21/"} 
                    >
                        The Americans with Disabilities Act of 1990 is a civil rights law that prohibits
                        discrimination based on disability. It affords similar protections against discrimination
                        to Americans with disabilities as the Civil Rights Act of 1964, which made discrimination
                        based on race, religion, sex, national origin, and other characteristics illegal.
                    </VerticalCard>
                    <VerticalCard
                        title={"European Standard EN 301 549"}
                        imgUrl={"./european-standard.svg"}
                        btnText={"Find out more"}
                        btnUrl={`https://digital-strategy.ec.europa.eu/en/policies/latest-changes-accessibility-standard`} 
                    >
                        The Americans with Disabilities Act of 1990 is a civil rights law that prohibits
                        discrimination based on disability. It affords similar protections against discrimination
                        to Americans with disabilities as the Civil Rights Act of 1964, which made discrimination
                        based on race, religion, sex, national origin, and other characteristics illegal.
                    </VerticalCard>
                </div>
            </div>


            <section className="shadowed-section shadowed-regulations">
                <BicolorTitledText
                    color1="black"
                    color2="#0D9E71"
                    color1Text="Web Accessibility"
                    color2Text="Lawsuits Samples"
                />
                <FirmSamples />
            </section>

            <section className="info-with-image regulation-section first-info">
                <div className="checked-info">
                    <BicolorTitledText
                        color1="#0D9E71"
                        color2="black"
                        color1Text="Tips for being"
                        color2Text="accessibility compliant"
                        className="checked-info-header"
                    >
                        <span>Whether your organization is already involved in litigation or is proactive with accessibility,
                        the best course of action is to make your website or app conformant with WCAG 2.0/2.1 Level AA.
                        <br /><br /></span>
                        AS A START, WE RECOMMEND THE FOLLOWING TIPS:
                    </BicolorTitledText>

                    <CheckedItem>
                        <b>Fix the technical basics.</b> The most common ADA lawsuit complaints about websites are missing alt text,
                        missing labels, empty links, redundant links, and missing page titles. For apps, they include incompatibility
                        with screen reader technology, missing alt text, and missing navigation links.
                    </CheckedItem>
                    <CheckedItem>
                        <b>Include people with disabilities in your user testing.</b> Though automated scans are a helpful first step in identifying
                        problems, they cannot always emulate the nuances of human interactions with digital interfaces. User testing that includes
                        people with disabilities gives you a more holistic picture of your website’s or app’s user experience.
                    </CheckedItem>
                    <CheckedItem>
                        <b>Commit to long-term maintenance.</b> No software can instantly identify, let alone fix, all of your digital accessibility problems
                        once and for all. The digital landscape is ever-evolving, as are human users. True accessibility requires a long-term,
                        comprehensive digital accessibility testing, remediation, and maintenance program.
                    </CheckedItem>

                    <Button onClick={scrollToContactForm}
                        className="automation"
                    >Get in touch</Button>
                </div>

                <img src="./encircled-bg-large.png" alt="Using a tablet" className="regulations-desktop-img" />
            </section>

            <section className="green-bg-section regulations">
                <BicolorTitledText
                    color1="black"
                    color2="#0D9E71"
                    color1Text="What to do next?"
                    color2Text=""
                >
                    We can help you meet the WCAG standards. Connect with us today to learn more about our comprehensive
                    approach to digital accessibility, including our automated and manual auditing capabilities and extensive
                    range of managed services.
                </BicolorTitledText>

                <Button onClick={scrollToContactForm}
                        className="automation"
                >Get in touch</Button>
            </section>
        </div>
    )
}

export default StandardRegulations
