import React from "react"
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'
import "./SocialLinks.css"

function SocialLinks() {
    return (
        <div style={{ paddingTop: "1em" }}>
            <ul className="social-links">
<<<<<<< HEAD
                <li><a href="#clients" className="social-link"><FaTwitter size={35} /></a></li>
                <li style={{ padding: "0px 1em " }} ><a href="#clients" className="social-link"><FaInstagram size={35} /></a></li>
                <li><a href="#clients" className="social-link"><FaFacebook size={35} /></a></li>
=======
                <li><a href="http://google.com" className="social-link"><FaTwitter size={35} /></a></li>
                <li style={{ padding: "0px 1em " }} ><a href="http://google.com" className="social-link"><FaInstagram size={35} /></a></li>
                <li><a href="http://google.com" className="social-link"><FaFacebook size={35} /></a></li>
>>>>>>> ernesto/feat/Footer
            </ul>
        </div >
    )
}
export default SocialLinks