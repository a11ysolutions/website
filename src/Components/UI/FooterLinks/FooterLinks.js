import React from "react"
import { Link } from "react-router-dom"
import "./FooterLinks.css"


function FooterLinks() {
    return (
        <div style={{ margin: "1em 0" }}>
            <nav className="footer-nav">
                <ul className="footer-links">
                    <li style={{}}><Link to="/regulations" className="footer-link">Web Accessibility Standards and Regulations </Link></li>
                    <li><a href="#clients" className="footer-link">Services </a></li>
                    <li><a href="/privacy-policy" className="footer-link">Privacy Policy</a></li>
                    <li><a href="#clients" className="footer-link">Sitemap </a></li>
                </ul>
            </nav>
        </div>
    )
}
export default FooterLinks