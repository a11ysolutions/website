import React from "react";
import "./PrivacyPolicy.css";
import { Helmet } from "react-helmet";
import Presentation from "../UI/Presentation/Presentation";
import HomeIlustration from "../UI/HomeIlustration/HomeIlustration";
import { PRIVACY_POLICY_CONTENT } from "./PrivacyPolicyContent";

function PrivacyPolicy() {
  return (
    <div id="privacy-policy-main" className="privacy-policy-page-container">
      <Helmet>
        <title>Privacy Policy | A11ysolutions</title>
      </Helmet>

      <div className="privacy-policy-presentation-container">
        <div className="page-top">
          <Presentation
            title="Privacy Policy"
            texts={["How A11YSolutions LLC Protects Your Information"]}
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
      <div
        className="privacy-policy"
        dangerouslySetInnerHTML={{ __html: PRIVACY_POLICY_CONTENT }}
      ></div>
    </div>
  );
}

export default PrivacyPolicy;
