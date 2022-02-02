import React from 'react'
import Button from '../Button/Button'
import "./VerticalCard.css";

function VerticalCard({imgUrl, title, children, btnText, btnUrl}) {
    return (
        <div className="vertical-card">

            <img src={imgUrl} alt={title} />
            <h3 className="vertical-card-title">
                {title}
            </h3>

            <div>{children}</div>

            <Button className="vertical-card-button"><a className="no-decorator-link" href={btnUrl} target="_blank" rel="noreferrer">{btnText}</a></Button>
        </div>
    )
}

export default VerticalCard
