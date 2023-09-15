import React from 'react'
import './CustomCard.css'

function FeatureCard({ children, imgSrc, imgDiv, className, classEllipseBar, classImgDivMac, classImgDivBrowser, classTextContainer, icon,}) {
  const divStyle = imgDiv ? { backgroundImage: `url(${process.env.PUBLIC_URL}${imgDiv})` } : {}

  return (
    <div className={`custom-card ${className}`} role="listitem">
      {imgSrc && (
        <div className={`custom-card-ellipse ${classEllipseBar}`}>
          {icon && (
            <div className="icon-container">
              <img src="./quotation.svg" className="custom-card-icon" alt="" />
            </div>
          )}
          {imgDiv && <div className={`${classImgDivMac} ${classImgDivBrowser}`} style={divStyle}></div>}
          <img src={imgSrc} className={`custom-card-img ${imgDiv ? 'imgDivPosition' : ''}`} alt="" />
        </div>
      )}
      <div className={`custom-card-text-container ${classTextContainer}`}>{children}</div>
    </div>
  )
}

export default FeatureCard
