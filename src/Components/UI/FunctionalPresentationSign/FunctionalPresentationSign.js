import React from "react"
import Button from "../Button/Button"
import "./FunctionalPresentationSign.css"

function FunctionalPresentationSign() {
    return <div className="functional-presentation-sign">
        <h1 style={{ width: "248px", fontWeight: "bold", fontSize: "48px", marginBottom: "16px" }}>Scalable Functional Testing Services</h1>

        <text>Discover how you can instantly and </text>
        <text>effortless find the bugs impacting </text>
        <text>your users enabling you to release </text>
        <text>high quality and speed.</text>

        <Button size="large" style={{ marginTop: "24px" }}>
            Get a free consultation
        </Button>
    </div>
}

export default FunctionalPresentationSign