import React from "react"
import "./ContactInfo.css"

//import Logo from "../Logo/Logo"

function ContactInfo({reference}) {
    
    return (
        <div style={{ marginTop: "4em" }} id="contact-us">
            <h2 tabIndex="-1" ref={reference} style={{ textTransform: "uppercase", fontSize: "1em" }}>Contact us</h2>
            <div className="contact-info-item">+1 (407) 535-1932</div>
            <div className="contact-info-item">a11ycontact@a11ysolutions.com</div>
            <div className="contact-info-item">Miami, Florida, US.</div>
        </div>
    )
}
export default ContactInfo