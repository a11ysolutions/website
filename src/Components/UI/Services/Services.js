import React from "react"
import ServiceCard from "../ServiceCard/ServiceCard"
import "./Services.css"
function Services() {
    return (
        <div className="a11y-services">
            <ServiceCard
                header="Functional testing"
                imgSrc="/functional-testing.png"
                style={{ marginTop: "53px" }}
                imgClass="services-functional-img"
                onClickButton={() => {
                    document.location.href = "/functional"
                }}
            >
                <p>We ensure your digital Products, Software,<br />
                    Mobile and Web Applications deliver the<br />
                    performance and experience they were<br />
                    designed for.</p>
            </ServiceCard>
            <ServiceCard
                header="Accessibility testing"
                imgSrc="/accessibility-testing.png"
                imgColor="#21ce99"
                style={{ marginTop: "53px" }}
                imgClass="services-accessibility-img"
                imgStyle={{ boxShadow: "0px 3px 40px #17D1984D" }}
                onClickButton={() => {
                    document.location.href = "/accessibility"
                }}
            >
                <p>
                    We ensure your product is WCAG <br />
                    compliance, allowing all people to have <br />
                    equal access to it.
                </p>
            </ServiceCard>
            <ServiceCard
                header="Automation testing"
                imgSrc="/automation-testing.png"
                style={{ marginTop: "53px" }}
                imgClass="services-automation-img"
                onClickButton={() => {
                    document.location.href = "/automation"
                }}
            >
                <p>
                    We check your product is functioning  <br />
                    properly after changes are done, running <br />
                    automated tests as often as needed.
                </p>
            </ServiceCard>
            <div className="services-circles-section">
                <div className="services-circle"></div>
            </div>
        </div>
    )
}

export default Services