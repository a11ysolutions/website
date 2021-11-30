import React from "react"
import Button from "../Button/Button"
import "./PresentationSign.css"
import { scrollToContactForm } from "../../Utils/Utils"

function PresentationSign() {
    return <div className="presentation-sign">
        <h1 style={{ width: "248px", fontWeight: "bold", fontSize: "48px", marginBottom: "16px" }}>It's time to evolve!</h1>

        <text>We are committed to delivering </text>
        <text>your product with the best quality ever.</text>

        <Button size="large" style={{ marginTop: "24px" }} onClick={scrollToContactForm}>
            Get a free consultation
        </Button>
    </div>
}

export default PresentationSign