import React from "react";
import "./ListPricing.css";
import { AlliWidgetFeaturesList } from '../../Utils/Utils';

function ListPricing() {
  return (
    <ul className="container-list-pricing">
      {AlliWidgetFeaturesList.map((f) => {
        return (
          <>
            <li className="list-pricing-heading">
              <p>{f.title}</p>
            </li>
            {f.features.map((features) => (
              <li className="list-pricing list-pricing">
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
