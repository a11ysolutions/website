import React from "react";
import "./AccessibilityStatement.css";
import { Helmet } from "react-helmet";
import Presentation from "../UI/Presentation/Presentation";
import HomeIlustration from "../UI/HomeIlustration/HomeIlustration";

function AccessibilityStatement() {
  return (
    <div id="privacy-policy-main" className="privacy-policy-page-container">

      <Helmet>
        <title>
        Accessibility Statement | A11ysolutions
        </title>
      </Helmet>

      <div className="privacy-policy-presentation-container">
        <div className="page-top">
          <Presentation
            title="Accessibility Statement"
            texts={[
              ""
            ]}
            buttonText="Get a free consultation"
            className="privacy-policy-presentation-sign"
          />
        </div>
        <div className="privacy-policy-ilustration-container">
          <HomeIlustration
            firstPillText="Secure"
            secondPillText="Reliable"
            thirdPillText="Ethical"
          />
        </div>
      </div>
      <div className="privacy-policy-statement">
        <div>
          <h2>Accessibility Statement for a11ySolutions, llc</h2>
          <p>Last updated March 9, 2023.</p>
          <p>
            At a11ySolutions llc, we are committed to ensuring that all visitors to our website have access to the information and services
            provided on our site, regardless of any disabilities they may have. We strive to adhere to the
            Web Content Accessibility Guidelines (WCAG) 2.1 Level AA to ensure that our website is accessible to everyone.
          </p>

          <h3>Summary of Accessibility Features</h3>
          <ul>
            <li>Alt text descriptions for all images </li>
            <li>Descriptive link text that provides context for the destination page</li>
            <li>Consistent navigation and layout </li>
            <li>Use of headings and subheadings to organize content and improve readability</li>
            <li>Keyboard navigation support to allow users to navigate the website without a mouse</li>
            <li>Use of high-contrast color combinations for text and background</li>
            <li>Resizable text to enable users to adjust font size for easier readability</li>
          </ul>
          
          <h3>How did we do it</h3>
          <p>
            Our accessibility experts conducted manual testing on a Windows or Mac computer using NVDA, JAWs, or VoiceOver, as appropriate.
            Proprietary software is used for all automated testing.
          </p>

          <h3>How Can We Help?</h3>
          <p>
            We welcome any comments, questions, or feedback on our site. If you notice aspects of our site that aren’t working for you or your
            assistive technology, please let us know. We’d like to hear from you in any of the following ways:
            <br />
            <br />
            <b>Call us at:</b> +1 407-535-1932
            <br />
            <b>Email us:</b> <a href="mailto:a11ycontact@a11ysolutions.com">a11ycontact@a11ysolutions.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AccessibilityStatement;
