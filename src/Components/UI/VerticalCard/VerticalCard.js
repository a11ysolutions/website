import React from 'react'
import Button from '../Button/Button'
import "./VerticalCard.css";

function VerticalCard({imgUrl, title, children, btnText, btnUrl}) {
    return (
        <div className="vertical-card">

            <img src={imgUrl} alt={title} />
            <div className="vertical-card-title">
                {title}
            </div>

            <div>{children}</div>

            <Button className="vertical-card-button"><a className="no-decorator-link" href={btnUrl}>{btnText}</a></Button>
        </div>
    )
}

export default VerticalCard
