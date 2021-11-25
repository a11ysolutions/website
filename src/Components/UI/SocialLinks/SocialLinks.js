import React from "react"
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'
import "./SocialLinks.css"

function SocialLinks() {
    return (
        <div style={{ paddingTop: "1em" }}>
            <ul className="social-links">
                <li><a href="#" className="social-link"><FaTwitter size={35} /></a></li>
                <li style={{ padding: "0px 1em " }} ><a href="#" className="social-link"><FaInstagram size={35} /></a></li>
                <li><a href="#" className="social-link"><FaFacebook size={35} /></a></li>
            </ul>
        </div >
    )
}
export default SocialLinks