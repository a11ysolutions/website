import React from "react"
import "./Clients.css"
import BicolorTitledText from "../BicolorTitledText/BicolorTitledText"
function Clients() {
    return (
        <div className="clients-container" id="clients">
            <div className="clients-bicolored-text">
                <BicolorTitledText
                    color2="black"
                    color1="#0D9E71"
                    color1Text="Trusted by many clients"
                    color2Text="including:"
                    breakLine={false}
                />
            </div>
            <div className="clients-img-container" role={'list'}>
                <div className="clients-img-row">
                    <div className="clients-img-card" role={'listitem'}>
                        <img
                            alt="client front10"
                            src="/client-front10.png"
                            style={{
                                width: "116px",
                                height: "45px"
                            }}
                        />
                    </div>
                    <div className="clients-img-card" role={'listitem'}>
                        <img
                            alt="client adavec"
                            src="/adavec.png"
                            style={{
                                width: "152px",
                                height: "60px"
                            }}
                        />
                    </div>
                </div>
                <div className="clients-img-row">
                    <div className="clients-img-card" role={'listitem'}>
                        <img
                            alt="client pixel perfecto"
                            src="/client-pixel.png"
                            style={{
                                width: "128px",
                                height: "49px"
                            }}
                        />
                    </div>
                    <div className="clients-img-card" role={'listitem'}>
                        <img
                            alt="client everymundo"
                            src="/client-em.png"
                            style={{
                                width: "139px",
                                height: "24px"
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients