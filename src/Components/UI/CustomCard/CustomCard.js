import React from 'react'
import './CustomCard.css'

function FeatureCard({ children, imgSrc, className, classEllipseBar, classTextContainer, icon }) {
  return (
    <div className={`custom-card ${className}`} role="listitem">
      <div className={`custom-card-ellipse ${classEllipseBar}`}>
        {icon && (
          <div className="icon-container">
            <img src="./quotation.svg" className="custom-card-icon" alt="" />
          </div>
        )}
        <img src={imgSrc} className="custom-card-img" alt="" />
      </div>
      <div className={`custom-card-text-container ${classTextContainer}`}>{children}</div>
    </div>
  )
}

export default FeatureCard
