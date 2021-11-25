import React from "react"
import "./Footer.css"
import Logo from "../Logo/Logo"
import FooterLinks from "../FooterLinks/FooterLinks"
import ContactInfo from "../ContactInfo/ContactInfo"
import Form from "../Form/Form"
import SocialLinks from "../SocialLinks/SocialLinks"

function Footer() {
    return (
        <footer className="footer" style={{}}>
            <Logo color="green" />
            <FooterLinks />
            <SocialLinks />
            <ContactInfo />
            <Form />
            <div>copyright</div>
        </footer>
    )
}

export default Footer

