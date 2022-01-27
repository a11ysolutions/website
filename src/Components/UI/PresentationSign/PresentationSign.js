import React from "react"
import Button from "../Button/Button"
import "./PresentationSign.css"
import { scrollToContactForm } from "../../Utils/Utils"

function PresentationSign({ className }) {
    return <div className={"presentation-sign " + className}>
        <h1 style={{zIndex: 2}}><b>It's time <br />to evolve!</b></h1>

        <p>
            We are committed to delivering <br />
            your product with the best quality ever.
        </p>

        <Button size="large" style={{ marginTop: "24px" }} onClick={scrollToContactForm}>
            Get a free consultation
        </Button>
    </div>
}

export default PresentationSign