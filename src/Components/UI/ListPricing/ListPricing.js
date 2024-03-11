import React from "react";
import "./ListPricing.css";

function ListPricing() {
  return (
    <ul className="container-list-pricing">
      <li className="list-pricing-heading">
        <p>AI-Powered screen reader & keyboard navigation</p>
      </li>
      <li className="list-pricing list-pricing">
        <p>Compliance with ADA, AODA, EAA, WCAG & more</p>
      </li>
      <li className="list-pricing list-pricing">
        <p>Accessibility statement & certification of performance</p>
      </li>
      <li className="list-pricing-heading">
        <p>Premium Addons</p>
      </li>
      <li className="list-pricing list-pricing">
        <p>Priority Support & SLA</p>
      </li>
      <li className="list-pricing list-pricing">
        <p>Monthly remediation report with full documentation</p>
      </li>
    </ul>
  );
}

export default ListPricing;
