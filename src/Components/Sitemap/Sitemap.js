import React, { useEffect } from 'react'
import "./Sitemap.css"

function Sitemap() {
    
    useEffect(() => {
        const layout = document.querySelector(".layout-content");
        const topCircles = document.querySelector(".circles-container");

        layout.style.background = "white";
        topCircles.style.display = "none";
    }, [])

    return (
        <div id="sitemap-container">
            <h1>Sitemap</h1>

            <div className="sitemap-listing">
                <ul>
                    <li>
                        <a href="/#clients">Services</a>
                        <ul>
                            <li><a href="/accessibility">Accessibility</a></li>
                            <li><a href="/functional">Functional</a></li>
                            <li><a href="/automation">Automation</a></li>
                        </ul>
                    </li>
                    
                    <li>
                        <a href="/regulations/#compliance-section">Compliance</a>
                        <ul>
                            <li><a href="https://www.ada.gov/">Americans with Disabilities Act (ADA)</a></li>
                            <li><a href="https://www.section508.gov/manage/laws-and-policies/">Section 508 Amendment to the Rehabilitation Act</a></li>
                            <li><a href="https://www.w3.org/TR/WCAG21/">Web Content Accessibility Guidelines (WCAG) 2.1</a></li>
                            <li><a href="https://digital-strategy.ec.europa.eu/en/policies/latest-changes-accessibility-standard">EN 301 549 European Standard</a></li>
                        </ul>
                    </li>

                    <li><a href="#footer-form">Get a free consultation</a></li>
                    <li><a href="/privacy-policy">Privacy Policy</a></li>

                </ul>
            </div>
        </div>
    )
}

export default Sitemap
