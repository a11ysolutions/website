import React, { useState } from "react";
import "./ListPricing.css";
import Button from "../../UI/Button/Button";
import PricingToggle from "../../UI/PricingToggle/PricingToggle";
import PricingCard from "../../UI/PricingCard/PricingCard";
import { AlliWidgetFeaturesList, handleScrollAndFocus } from "../../Utils/Utils";
import ReactGA from "react-ga4";
import { IoOpenOutline } from "react-icons/io5";

function ListPricing({ pricingPlan }) {
  const [activeToogle, setActiveToogle] = useState("Monthly");
  const isYear = activeToogle === "Monthly" ? false : true;
  const plans = [
    "A11iWidget Esential",
    "A11iBot Exclusive",
    "All-Inclusive Pro Bundle",
    "Enterprise",
  ];

  const handleToogle = (value) => {
    setActiveToogle(value);
  };

  const handlePayment = (pack) => {
    if (pack.custom) {
      ReactGA.event({
        category: "Pricing section",
        action: "button_contact_us",
        label: "The contact button was clicked",
      });
      return handleScrollAndFocus("#contact-us h2");
    }
    if (activeToogle === "Monthly") {
      ReactGA.event({
        category: "Pricing section",
        action: "button_start_free_trial",
        label: `The Start Free Trial button was clicked.${pack.name}.Billing Monthly.`,
      });
      return window.open(pack.stripeMonthLink, "_blank");
    }
    if (activeToogle === "Annual") {
      ReactGA.event({
        category: "Pricing section",
        action: "button_start_free_trial",
        label: `The Start Free Trial button was clicked.${pack.name}.Billing Annual.`,
      });
      return window.open(pack.stripeAnnualLink, "_blank");
    }
  };

  const generateTrial = () => {
    return (
      <p>
        1 month Including a Limited Manual Audit (Up to 10 issues) & an
        Executive Summary
      </p>
    );
  };
  const generatePlanCells = (included, className = "") => {
    return (
      <td className={className}>
        {included ? (
          <>
            <svg
              aria-hidden="true"
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
            <span className="sr-only">Included</span>
          </>
        ) : (
          <>
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M202.83 197.17a4 4 0 0 1-5.66 5.66L128 133.66l-69.17 69.17a4 4 0 0 1-5.66-5.66L122.34 128L53.17 58.83a4 4 0 0 1 5.66-5.66L128 122.34l69.17-69.17a4 4 0 1 1 5.66 5.66L133.66 128Z"
              />
            </svg>
            <span className="sr-only">Not included</span>
          </>
        )}
      </td>
    );
  };

  return (
    <>
      <PricingToggle active={activeToogle} onClick={handleToogle} />
      <div
        id={activeToogle === "Monthly" ? "panel-1" : "panel-2"}
        className="table-responsive"
        aria-labelledby="billingTabPanel"
        role="tabpanel"
        tabIndex={0}
      >
        <span id="billingTabPanel" aria-hidden="true" className="sr-only">
          {activeToogle === "Monthly"
            ? "Monthly Billing Features&Packages"
            : "Annual Billing Features&Packages, Save 2 months"}
        </span>
        <div className="container-mobile-pricing">
          {pricingPlan.map((pack, index) => (
            <PricingCard
              key={`pricing-card-${index}`}
              title={pack.name}
              price={
                activeToogle === "Monthly" ? pack.monthPrice : pack.annualPrice
              }
              buttonLabel={pack.custom ? "Contact us" : "Start Free Trial"}
              isYear={activeToogle === "Monthly" ? false : true}
              isPopular={pack.popular}
              isCustom={pack.custom}
              featuresList={pack.mobileFeatures}
              onClick={() => handlePayment(pack)}
            />
          ))}
        </div>
        <table className="container-table-pricing" aria-label="Pricing table">
          <thead>
            <tr style={{ height: "50px" }}>
              <th scope="col">&nbsp;</th>
              {plans.map((plan, index) => (
                <th
                  className={`${
                    plan === "All-Inclusive Pro Bundle" &&
                    "columns-popular top-border-header"
                  }`}
                  style={{ position: "relative" }}
                  key={`header-${index}`}
                  scope="col"
                >
                  {plan === "All-Inclusive Pro Bundle" ? (
                    <div className="pricing-popular-container">
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
                  ) : (
                    ""
                  )}
                  {plan}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {AlliWidgetFeaturesList.map((f, i) => (
              <>
                {i === 0 && (
                  <tr style={{ height: "50px" }} className="list-pricing">
                    <th className="th-header">Price</th>
                    {pricingPlan.map((pack) => (
                      <td
                        className={`${
                          pack.name === "All-Inclusive Pro Bundle"
                            ? "columns-popular card-price"
                            : "card-price"
                        }`}
                      >
                        {activeToogle === "Monthly"
                          ? pack.monthPrice
                          : pack.annualPrice}
                        {!pack.custom && (
                          <span
                            style={{
                              color: "black",
                              fontSize: "1.2rem",
                              textAlign: "center",
                            }}
                          >
                            {isYear ? "/year" : "/month"}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                )}
                {i === 0 && (
                  <tr className="list-pricing">
                    <th className="th-header">Bonus</th>
                    <td>{generateTrial()}</td>
                    <td>{generateTrial()}</td>
                    <td className="columns-popular">{generateTrial()}</td>
                    <td>&nbsp;</td>
                  </tr>
                )}
                {i === 0 && (
                  <tr>
                    <td>&nbsp;</td>
                    <td>
                      <Button
                        size="large"
                        className="table-button"
                        onClick={() => handlePayment(pricingPlan[0])}
                        variant="dark"
                        ariaLabel="Start Free Trial (opens new window)"
                      >
                        Start Free Trial
                        <IoOpenOutline size="20" aria-hidden="true"/>
                      </Button>
                    </td>
                    <td>
                      <Button
                        size="large"
                        className="table-button"
                        onClick={() => handlePayment(pricingPlan[1])}
                        variant="dark"
                        ariaLabel="Start Free Trial (opens new window)"
                      >
                        Start Free Trial
                        <IoOpenOutline size="20" aria-hidden="true"/>
                      </Button>
                    </td>
                    <td className="columns-popular">
                      <Button
                        size="large"
                        className="table-button"
                        onClick={() => handlePayment(pricingPlan[2])}
                        variant="dark"
                        ariaLabel="Start Free Trial (opens new window)"
                      >
                        Start Free Trial
                        <IoOpenOutline size="20" aria-hidden="true"/>
                      </Button>
                    </td>
                    <td>
                      <Button
                        size="large"
                        className="table-button"
                        onClick={() => handlePayment(pricingPlan[3])}
                        variant="dark"
                      >
                        Contact us
                      </Button>
                    </td>
                  </tr>
                )}
                <tr
                  className="list-pricing-heading"
                  key={`feature-row-title-${i}`}
                >
                  <th colSpan={5} scope="colgroup" className="colspan-header">
                    {f.title}
                  </th>
                </tr>
                {f.features.map((features, j) => (
                  <tr className="list-pricing" key={`feature-row-${j}`}>
                    <th>{features}</th>
                    {generatePlanCells(
                      pricingPlan[0].features.find((v) => v === features)
                    )}
                    {generatePlanCells(
                      pricingPlan[1].features.find((v) => v === features)
                    )}
                    {generatePlanCells(
                      pricingPlan[2].features.find((v) => v === features),
                      "columns-popular"
                    )}
                    {generatePlanCells(true)}
                  </tr>
                ))}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default ListPricing;
