import React from "react"
import ServiceCard from "../ServiceCard/ServiceCard"

function Services() {
    return (
        <div>
            <ServiceCard
                header="Functional testing"
                imgSrc="/functional-testing.png"
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
        </div>
    )
}

export default Services