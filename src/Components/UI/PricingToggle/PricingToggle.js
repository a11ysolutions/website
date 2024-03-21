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
      } else if (nextActive === "Annual") {
        annualRef.current.focus();
      }
      onClick(nextActive);
    }
  };

  const handleTabClick = (nextActive) => {
    onClick(nextActive);
    if (nextActive === "Monthly") {
      monthlyRef.current.focus();
    } else if (nextActive === "Annual") {
      annualRef.current.focus();
    }
  };

  return (
    <div
      className="pricing-toggle"
      role="tablist"
      aria-labelledby="billingCycleLabel"
    >
      <div className="pricing-toggle-container">
        <span id="billingCycleLabel" aria-hidden="true" className="sr-only">
          Billing cycle type
        </span>
        <div
          ref={monthlyRef}
          onClick={() => handleTabClick("Monthly")}
          onKeyDown={handleKeyDown}
          className={
            active === "Monthly" ? "toggle-tab toggle-active" : "toggle-tab"
          }
          role="tab"
          aria-selected={active === "Monthly"}
          aria-controls="panel-1"
          tabIndex={active === "Monthly" ? 0 : -1}
          aria-labelledby="monthlyContent"
          id="monthlyTab"
        >
          Monthly
        </div>
        <div
          ref={annualRef}
          onClick={() => handleTabClick("Annual")}
          onKeyDown={handleKeyDown}
          className={
            active === "Annual" ? "toggle-tab toggle-active" : "toggle-tab"
          }
          role="tab"
          aria-selected={active === "Annual"}
          aria-controls="panel-2"
          tabIndex={active === "Annual" ? 0 : -1}
          aria-labelledby="annualContent"
          id="annualTab"
        >
          Annual
        </div>
        <span className="badge" aria-hidden="true">Save 2 months</span>
        <div
          id="monthlyContent"
          className="sr-only"
          aria-hidden="true"
          hidden={active !== "Monthly"}
        >
          Monthly Billing Features&Packages
        </div>
        <div
          id="annualContent"
          className="sr-only"
          aria-hidden="true"
          hidden={active !== "Annual"}
        >
          Annual Billing Features&Packages, Save 2 months
        </div>
      </div>
    </div>
  );
};

export default PricingToggle;
