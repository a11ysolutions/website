import React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"
import ToggleMenu from "../ToggleMenu/ToggleMenu"
import Button from "../Button/Button"
import { scrollToContactForm } from "../../Utils/Utils"

function Navbar({ onClickMenu }) {
    return (
        <div className="a11y-navbar">
            <div className="a11y-navbar-logo">
                <button
                    style={{ background: "none", border: "none" }}
                    title="Home"
                    onClick={() => window.location.href = "/"}>
                    <Logo
                        style={{
                            width: "60px",
                            height: "24px",
                        }}
                    />
                </button>
            </div>

            <div className="a11y-navbar-toggle">
                <div className="a11y-navbar-items">
                    <a href="/#why-choose-us">Why choose us</a>
                    <a href="/#our-services">Our services</a>
                    <a href="/#clients">Clients</a>
                </div>

                <Button
                    className="a11y-navbar-contact"
                    onClick={scrollToContactForm}
                    style={{
                        width: "150px",
                        height: "40px",
                        marginLeft: "55px"
                    }}
                >
                    Contact us
                    </Button>
                <ToggleMenu onClick={onClickMenu} />
            </div>
        </div>
    )
}

export default Navbar