import React, { useRef } from "react";
import "./PricingToggle.css";

const PricingToggle = ({ active, onClick }) => {
  const monthlyRef = useRef(null);
  const annualRef = useRef(null);
  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      const nextActive = active === "Monthly" ? "Annual" : "Monthly";
      if (nextActive === "Monthly") {
        monthlyRef.current.focus();
      }
      if (nextActive === "Annual") {
        annualRef.current.focus();
      }
      onClick(nextActive);
    }
  };

  return (
    <div
      className="pricing-toggle"
      role="tablist"
      aria-labelledby="billingCycleLabel"
    >
      <div className="pricing-toggle-container">
        <span id="billingCycleLabel" className="sr-only">
          Billing cycle type
        </span>
        <button
          ref={monthlyRef}
          onClick={() => onClick("Monthly")}
          onKeyDown={handleKeyDown}
          className={
            active === "Monthly"
              ? "toggle-button toggle-active"
              : "toggle-button"
          }
          role="tab"
          aria-selected={active === "Monthly"}
          tabIndex={active === "Monthly" ? 0 : -1}
          aria-labelledby="monthlyContent"
          id="monthlyTab"
        >
          Monthly
        </button>
        <button
          ref={annualRef}
          onClick={() => onClick("Annual")}
          onKeyDown={handleKeyDown}
          className={
            active === "Annual"
              ? "toggle-button toggle-active"
              : "toggle-button"
          }
          role="tab"
          aria-selected={active === "Annual"}
          tabIndex={active === "Annual" ? 0 : -1}
          aria-labelledby="annualContent"
          id="annualTab"
        >
          Annual
        </button>
        <span className="badge">Save 2 months</span>
        <div
          id="monthlyContent"
          role="tabpanel"
          className="sr-only"
          hidden={active !== "Monthly"}
        >
          Monthly Billing Features & Packages
        </div>
        <div
          id="annualContent"
          role="tabpanel"
          className="sr-only"
          hidden={active !== "Annual"}
        >
          Annual Billing Features & Packages, Save 2 months
        </div>
      </div>
    </div>
  );
};

export default PricingToggle;
