import React from "react"
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'
import "./SocialLinks.css"

function SocialLinks() {
    return (
        <div style={{ paddingTop: "1em" }}>
            <ul className="social-links">
                <li><a aria-label="Twitter account" href="#clients" className="social-link"><FaTwitter size={35} /></a></li>
                <li style={{ padding: "0px 1em " }} ><a aria-label="Instagram account" href="#clients" className="social-link"><FaInstagram size={35} /></a></li>
                <li><a aria-label="Facebook account" href="#clients" className="social-link"><FaFacebook size={35} /></a></li>
            </ul>
        </div >
    )
}
export default SocialLinks