import React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"
import ToggleMenu from "../ToggleMenu/ToggleMenu"
import Button from "../Button/Button"
//import { scrollToContactForm} from "../../Utils/Utils"

function Navbar({ onClickMenu, onClickContactUs }) {
    
    return (
        <div className="a11y-navbar">
            <div className="a11y-navbar-logo">
                <a
                    style={{ background: "none", border: "none", textDecoration: "none" }}
                    title="Home"
                    href="/">
                    <Logo
                        className="a11y-navbar-logo-img"
                        style={{
                            width: "60px",
                            height: "24px",
                        }}
                        altText="A11ySolutions home"
                    />
                </a>
            </div>

            <div className="a11y-navbar-toggle">
                <ul className="a11y-navbar-items">
                    <li><a href="/#why-choose-us">Why choose us</a></li>
                    <li><a href="/#our-services">Our services</a></li>
                    <li><a href="/#clients">Clients</a></li>
                </ul>

                <Button
                    className="a11y-navbar-contact"
                    //onClick={scrollToContactForm}
                    onClick={onClickContactUs}

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