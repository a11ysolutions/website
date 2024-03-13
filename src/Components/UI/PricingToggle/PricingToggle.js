import React from "react";
import "./PricingToggle.css";

const PricingToggle = ({ active, onClick }) => {
  return (
    <div className="pricing-toggle">
      <div className="pricing-toggle-container">
        <button
          onClick={() => onClick("Monthly")}
          className={
            active === "Monthly"
              ? "toggle-button toggle-active"
              : "toggle-button"
          }
        >
          Monthly
        </button>
        <button
          onClick={() => onClick("Annual")}
          className={
            active === "Annual"
              ? "toggle-button toggle-active"
              : "toggle-button"
          }
        >
          Annual
        </button>
        <span className="badge">Save 2 months</span>
      </div>
    </div>
  );
};

export default PricingToggle;
