import React, { useState } from 'react'
import FirmContent from './FirmContent';
import SAMPLES from './Samples'
import "./FirmSamples.css";

function FirmSamples() {

    const keys = Object.keys(SAMPLES);

    const [selectedFirm, setSelectedFirm] = useState(keys[0]);

    return (
        <div className="firm-samples">
            <div className="firm-listing">
                <ul className="firm-list">
                    {
                        keys.map(firm =>
                            <li key={firm} className={`firm selected-${firm === selectedFirm}`} onClick={() => setSelectedFirm(firm)}>
                                {firm}
                                {firm === selectedFirm && <FirmContent firmName={firm} className="firm-content-mobile" />}
                            </li>)
                    }
                </ul>
            </div>

            <FirmContent firmName={selectedFirm} className="firm-content-desktop" />
        </div>
    )
}

export default FirmSamples
