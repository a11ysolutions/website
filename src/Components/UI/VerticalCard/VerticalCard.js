import React from 'react'
import Button from '../Button/Button'
import "./VerticalCard.css";

function VerticalCard({imgUrl, title, children, btnText, btnUrl}) {
    return (
        <div className="vertical-card">
            <div className="vertical-card-title">
                {title}
            </div>

            {children}

            <Button className="vertical-card-button"><a className="no-decorator-link" href={btnUrl}>{btnText}</a></Button>
        </div>
    )
}

export default VerticalCard
