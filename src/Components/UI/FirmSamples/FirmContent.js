import React from 'react'
import SAMPLES from "./Samples";

function FirmContent({firmName, className}) {
    
    const firm = SAMPLES[firmName];

    return (
        <div className={`firm-content ${className}`}>
            <img src={firm.img} alt={`${firmName} logo`}/>

            <div className="firm-content-description">
                {firm.content}
            </div>
        </div>
    )
}

export default FirmContent
