import React from "react";
import Button from "../Button/Button";
import "./PricingCard.css";

const PricingCard = ({
  title,
  price,
  description,
  onClick,
  buttonLabel,
  isYear,
  isPopular,
  isCustom,
}) => {
  const classCard = isPopular ? "card card-popular" : "card";
  const listFeaturesPlan = [false, true, true, false, true, true];
  const featuresList = [
    {
      title: "AI-Powered screen reader & keyboard navigation",
      features: [
        "Compliance with ADA, AODA, EAA, WCAG & more",
        "Accessibility statement & certification of performance",
      ],
    },
    {
      title: "Premium Addons",
      features: [
        "Priority Support & SLA",
        "Monthly remediation report with full documentation",
      ],
    },
  ];
  const isCustomPlan = () => {
    if (isCustom) {
      return "";
    } else {
      return isYear ? "/year" : "/month"
    }
  }
  return (
    <div className="card-container">
      {isPopular && (
        <div className="popular-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M237.3 97.9a13.78 13.78 0 0 0-12.08-9.6l-59.46-5.14a2 2 0 0 1-1.65-1.22l-23.23-55.36a14 14 0 0 0-25.76 0L91.89 81.94a2 2 0 0 1-1.65 1.22L30.78 88.3a13.78 13.78 0 0 0-12.08 9.6a14 14 0 0 0 4.11 15l45.11 39.35a2.06 2.06 0 0 1 .64 2L55 212.76a14 14 0 0 0 5.45 14.56a13.74 13.74 0 0 0 15.4.62l51.11-31a1.9 1.9 0 0 1 2 0l51.11 31A14 14 0 0 0 201 212.76l-13.52-58.53a2.06 2.06 0 0 1 .64-2l45.11-39.35a14 14 0 0 0 4.07-14.98Zm-12 5.92l-45.11 39.35a14 14 0 0 0-4.44 13.76l13.52 58.53a2 2 0 0 1-.79 2.13a1.81 1.81 0 0 1-2.14.09l-51.11-31a13.92 13.92 0 0 0-14.46 0l-51.11 31a1.81 1.81 0 0 1-2.14-.09a2 2 0 0 1-.79-2.13l13.52-58.53a14 14 0 0 0-4.44-13.76L30.7 103.82a2 2 0 0 1-.59-2.19a1.86 1.86 0 0 1 1.7-1.38l59.47-5.14A14 14 0 0 0 103 86.58l23.23-55.36a2 2 0 0 1 3.62 0L153 86.58a14 14 0 0 0 11.68 8.53l59.47 5.14a1.86 1.86 0 0 1 1.7 1.38a2 2 0 0 1-.55 2.19Z"
            />
          </svg>
          <p>Popular</p>
        </div>
      )}
      <div className={classCard}>
        <h2 className="card-title">{title}</h2>
        <p className="card-price">
          {price}{" "}
          <span
            style={{ color: "black", fontSize: "1.2rem", textAlign: "center" }}
          >
            {isCustomPlan}
          </span>
        </p>
        <p className="card-description">{description}</p>
        <div
          style={{
            maxWidth: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
           <Button
            size="large"
            onClick={onClick}
            variant="dark"
          >
            {buttonLabel}
          </Button>
        </div>
        <div className="feature-pricing-container">
          {listFeaturesPlan.map((el) => {
            if (el) {
              return (
                <div className="feature-pricing">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="m226.83 74.83l-128 128a4 4 0 0 1-5.66 0l-56-56a4 4 0 0 1 5.66-5.66L96 194.34L221.17 69.17a4 4 0 1 1 5.66 5.66Z"
                    />
                  </svg>
                </div>
              );
            } else {
              return <div className="feature-pricing"></div>;
            }
          })}
        </div>
        {featuresList.map((featList) => {
          return (
            <div className="feature-pricing-mobile">
              <p className="feature-pricing-mobile-title">{featList.title}</p>
              {featList.features.map((feat) => {
                return (
                  <div className="feature-plan-mobile">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="currentColor"
                        d="m226.83 74.83l-128 128a4 4 0 0 1-5.66 0l-56-56a4 4 0 0 1 5.66-5.66L96 194.34L221.17 69.17a4 4 0 1 1 5.66 5.66Z"
                      />
                    </svg>
                    <p className="feature-pricing-mobile-description">{feat}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingCard;
