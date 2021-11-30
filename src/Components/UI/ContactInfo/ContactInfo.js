import React from "react"
import "./ContactInfo.css"
//import Logo from "../Logo/Logo"

function ContactInfo() {
    return (
        <div style={{ marginTop: "4em" }} id="contact-us">
            <h2 style={{ textTransform: "uppercase", fontSize: "1em" }}>Contact us</h2>
            <div className="contact-info-item">+1 (407) 535-1932</div>
            <div className="contact-info-item">a11ycontact.info@gmail.com</div>
            <div className="contact-info-item">Miami, Florida, US.</div>
        </div>
    )
}
export default ContactInfo