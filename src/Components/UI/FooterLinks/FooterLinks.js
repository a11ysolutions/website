import React from "react"
import "./FooterLinks.css"


function FooterLinks() {
    return (
        <div style={{ margin: "1em 0" }}>
            <nav className="footer-nav">
                <ul className="footer-links">
                    <li style={{}}><a href="/regulations" className="footer-link">Web Accessibility Standards and Regulations </a></li>
                    <li><a href="/#clients" className="footer-link">Services </a></li>
                    <li><a href="/privacy-policy" className="footer-link">Privacy Policy</a></li>
                    <li><a href="#clients" className="footer-link">Sitemap </a></li>
                </ul>
            </nav>
        </div>
    )
}
export default FooterLinks