import React from "react"
import "./Footer.css"
import Logo from "../Logo/Logo"
import FooterLinks from "../FooterLinks/FooterLinks"
import ContactInfo from "../ContactInfo/ContactInfo"
import Form from "../Form/Form"
import SocialLinks from "../SocialLinks/SocialLinks"

function Footer() {
    return (
        <footer className="footer" id="footer">
            <div className="footer-section">
                <div className="footer-top-section">
                    <div>
                        <Logo color="green" />
                        <FooterLinks />
                        <SocialLinks />
                    </div>
                    <div>
                        <ContactInfo />
                    </div>
                </div>
                <div className="footer-form">
                    <Form />
                </div>
            </div>
            <div className="footer-copyright">
                <div>Copyright 2021 <strong>a11ySolutions.{" "}</strong></div>
                <div>All Rights Reserved</div>
            </div>
        </footer>
    )
}

export default Footer

