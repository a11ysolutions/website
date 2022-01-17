import React from 'react'
import BicolorTitledText from '../UI/BicolorTitledText/BicolorTitledText'
import Button from '../UI/Button/Button'
import CheckedItem from '../UI/CheckedItem/CheckedItem'
import VerticalCard from '../UI/VerticalCard/VerticalCard'
import { scrollToContactForm } from '../Utils/Utils'

function StandardRegulations() {
    return (
        <div className="page-container">
            
            <BicolorTitledText
                color1="black"
                color2="#0D9E71"
                color1Text="Web Accessibility"
                color2Text="Standards & Regulations"
            />

            <div className="vertical-cards-container">
                <div>
                    <VerticalCard></VerticalCard>
                    <VerticalCard></VerticalCard>
                </div>
                <div>
                    <VerticalCard></VerticalCard>
                    <VerticalCard></VerticalCard>
                </div>
            </div>

            <BicolorTitledText
                color1="black"
                color2="#0D9E71"
                color1Text="Web Accessibility"
                color2Text="Lawsuits Samples"
            />

            {/* EMPRESAS */}

            <section className="info-with-image automation-section first-info">
                <div className="checked-info">
                    <BicolorTitledText
                        color1="#0D9E71"
                        color2="black"
                        color1Text="Web Accessibility"
                        color2Text="Lawsuits Samples"
                        className="checked-info-header"
                    >
                        Whether your organization is already involved in litigation or is proactive with accessibility,
                        the best course of action is to make your website or app conformant with WCAG 2.0/2.1 Level AA.
                        <br /><br />
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

                <div className="intermediate-image a11y-img-combo">
                    <div className="automation-first-encircled-img">
                        <img src="./tablet-unpash.png" alt="Using a tablet" className="automation-first-image" />
                    </div>
                    <div className="automation-first-blurred-circle"></div>
                </div>
            </section>

            <section className="green-bg-section">
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
