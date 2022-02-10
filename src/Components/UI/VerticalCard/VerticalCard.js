import React from 'react'
import CardButton from '../CardButton/CardButton.js'
import "./VerticalCard.css";

function VerticalCard({imgUrl, title, children, btnText, btnUrl, linkAriaLabel}) {
    
    let ariaLabelToAdd = { "aria-label": linkAriaLabel }

    return (
        <div className="vertical-card">

            <img src={imgUrl} alt={title} />
            <h3 className="vertical-card-title">
                {title}
            </h3>

            <div>{children}</div>

            <CardButton className="vertical-card-button card-button">
                <a className="no-decorator-link" href={btnUrl} target="_blank" rel="noreferrer" 
                {...(linkAriaLabel && ariaLabelToAdd)}
                 >{btnText}</a>
            </CardButton>
        </div>
    )
}

export default VerticalCard
