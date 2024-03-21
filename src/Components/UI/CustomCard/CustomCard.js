import React from 'react'
import './CustomCard.css'

function FeatureCard({ children, imgSrc, imgDiv, className, classEllipseBar, classImgDivMac, classImgDivBrowser, classTextContainer, icon,}) {
  const divStyle = imgDiv ? { backgroundImage: `url(${process.env.PUBLIC_URL}${imgDiv})` } : {}

  return (
    <div className={`custom-card ${className}`}>
      {imgSrc && (
        <div className={`custom-card-ellipse ${classEllipseBar}`} aria-hidden="true">
          {icon && (
            <div className="icon-container">
              <img src="./quotation.svg" className="custom-card-icon" alt="" aria-hidden="true"/>
            </div>
          )}
          {imgDiv && <div className={`${classImgDivMac} ${classImgDivBrowser}`} style={divStyle}></div>}
          <img src={imgSrc} className={`custom-card-img ${imgDiv ? 'imgDivPosition' : ''}`} alt="" aria-hidden="true" />
        </div>
      )}
      <div className={`custom-card-text-container ${classTextContainer}`}>{children}</div>
    </div>
  )
}

export default FeatureCard
