import React from "react"
import "./Clients.css"
function Clients() {
    return (
        <div className="clients-container" id="clients">
            <p>
                <span style={{ color: "#0D9E71" }}>Trusted by many <br /> clients</span>, including:
            </p>
            <div className="clients-img-row">
                <div className="clients-img-card">
                    <img
                        alt="client front10"
                        src="/client-front10.png"
                        style={{
                            width: "116px",
                            height: "45px"
                        }}
                    />
                </div>
                <div className="clients-img-card">
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
                <div className="clients-img-card">
                    <img
                        alt="client pixel perfecto"
                        src="/client-pixel.png"
                        style={{
                            width: "128px",
                            height: "49px"
                        }}
                    />
                </div>
                <div className="clients-img-card">
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
    )
}

export default Clients