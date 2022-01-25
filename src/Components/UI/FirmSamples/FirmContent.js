import React from 'react'
import SAMPLES from "./Samples";

function FirmContent({firmName, className}) {
    
    const firm = SAMPLES[firmName];

    const firmImgPrefix = firm.img.split(".")[0];

    return (
        <div className={`firm-content ${className}`}>
            {firm.img.endsWith('png') && <img src={firm.img} alt={`${firmName} logo`} className='firm-img-desktop'/>}
            {firm.img.endsWith('png') && <img src={`.${firmImgPrefix}-small.png`} alt={`${firmName} logo`} className='firm-img-mobile'/>}
            {firm.img.endsWith('svg') && <img src={firm.img} alt={`${firmName} logo`}/>}


            <div className="firm-content-description">
                {firm.content}
            </div>
        </div>
    )
}

export default FirmContent
