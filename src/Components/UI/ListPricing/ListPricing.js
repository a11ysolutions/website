import React from "react";
import "./ListPricing.css";
import { AlliWidgetFeaturesList } from '../../Utils/Utils';

function ListPricing() {
  return (
    <ul className="container-list-pricing">
      <li style={{backgroundColor: "white"}} className="list-pricing-heading">
              <p>Trial Period</p>
      </li>
      {AlliWidgetFeaturesList.map((f, index) => {
        return (
          <>
            <li key={`list-${index}`} className="list-pricing-heading">
              <p>{f.title}</p>
            </li>
            {f.features.map((features) => (
              <li className="list-pricing">
                <p>{features}</p>
              </li>
            ))}
          </>
        );
      })}
    </ul>
  );
}

export default ListPricing;
