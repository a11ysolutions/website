import React from 'react'
import './ImageDivider.css'

export const ImageDivider = ({ top, bottom, variantTopGreen, variantTopBlack, variantBottomGreen, variantBottomBlack }) => {
  const divStyleTop = variantTopGreen
    ? { backgroundImage: `url(${process.env.PUBLIC_URL}${'/divider-g.svg'})` }
    : variantTopBlack
    ? { backgroundImage: `url(${process.env.PUBLIC_URL}${'/divider-b.svg'})` }
    : { backgroundImage: `url(${process.env.PUBLIC_URL}${'/divider-w.svg'})` }
    
  const divStyleBottom = variantBottomBlack
    ? { backgroundImage: `url(${process.env.PUBLIC_URL}${'/divider-b.svg'})` }
    : variantBottomGreen
    ? { backgroundImage: `url(${process.env.PUBLIC_URL}${'/divider-g.svg'})` }
    : { backgroundImage: `url(${process.env.PUBLIC_URL}${'/divider-w.svg'})` }

  return (
    <>
      {top && <div className="top-divider" style={divStyleTop}></div>}
      {bottom && <div className="bottom-divider" style={divStyleBottom}></div>}
    </>
  )
}
