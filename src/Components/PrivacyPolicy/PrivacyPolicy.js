import React from "react";
import "./PrivacyPolicy.css";
import { Helmet } from "react-helmet";
import Presentation from "../UI/Presentation/Presentation";
import HomeIlustration from "../UI/HomeIlustration/HomeIlustration";
import { PRIVACY_POLICY_CONTENT } from "./PrivacyPolicyContent";
import { ImageDivider } from "../UI/ImageDivider/ImageDivider";

function PrivacyPolicy() {
  function updateWrappedHeadings(htmlString) {
    const rules = [
      {
        searchFor: /<[^>]*>PRIVACY POLICY<\/[^>]*>/g,
        replaceWith: "<h2>PRIVACY POLICY</h2>",
      },
      {
        searchFor: /<[^>]*>(SUMMARY OF KEY POINTS|TABLE OF CONTENTS)<\/[^>]*>/g,
        replaceWith: "<h3>$1</h3>",
      },
      {
        searchFor:
          /<[^>]*>(California Residents|Colorado Residents|Connecticut Residents|Utah Residents|Virginia Residents)<\/[^>]*>/g,
        replaceWith: "<h5>$1</h5>",
      },
    ];
    rules.forEach((rule) => {
      htmlString = htmlString.replace(rule.searchFor, rule.replaceWith);
    });
    return htmlString;
  }
  function mergeTablesIntOne() {
    //Update table headers with "th"
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = PRIVACY_POLICY_CONTENT;
    const headerRow = tempDiv.querySelector("table tbody tr");
    if (headerRow) {
      const headerTds = headerRow.querySelectorAll("td");
      headerTds.forEach((td) => {
        const th = document.createElement("th");
        th.innerHTML = td.innerHTML;
        Array.from(td.attributes).forEach((attr) => {
          th.setAttribute(attr.name, attr.value);
        });
        td.parentNode.replaceChild(th, td);
      });
    }
    //Mix the tables into one
    const tables = tempDiv.querySelectorAll("table");
    if (tables.length >= 3) {
      for (let i = 1; i < tables.length; i++) {
        const rows = tables[i].querySelectorAll("tr");
        rows.forEach((row) => {
          tables[0].querySelector("tbody").appendChild(row);
        });
        tables[i].parentNode.removeChild(tables[i]);
      }
    }
    //Replace "div" with "br" for "p"
    const divContainer = tempDiv.querySelectorAll("div");
    divContainer.forEach((div) => {
      if (div.childNodes.length === 1 && div.childNodes[0].nodeName === "BR") {
        const p = document.createElement("p");
        div.parentNode.replaceChild(p, div);
      }
    });
    //Add Headings h4
    const elements = tempDiv.querySelectorAll(
      '[data-custom-class="heading_1"]'
    );
    elements.forEach((element) => {
      const newH4 = document.createElement("h4");
      newH4.innerHTML = element.innerHTML;
      Array.from(element.attributes).forEach((attr) => {
        newH4.setAttribute(attr.nodeName, attr.nodeValue);
      });
      element.parentNode.replaceChild(newH4, element);
    });

    return updateWrappedHeadings(tempDiv.innerHTML);
  }
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
        <ImageDivider bottom />
      </div>
      <div
        className="privacy-policy"
        dangerouslySetInnerHTML={{ __html: mergeTablesIntOne() }}
      ></div>
      <ImageDivider bottom variantBottomBlack />
    </div>
  );
}

export default PrivacyPolicy;
