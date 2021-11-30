import React from "react"
import "./SideDrawer.css"
import { IoCloseSharp } from "react-icons/io5"
import Logo from "../Logo/Logo"
import "../ToggleMenu/ToggleMenu.css"
import Button from "../Button/Button"

function SideDrawer({ show, onClose }) {
    let attachedClasses = ["side-drawer", "close"]
    if (show)
        attachedClasses = ["side-drawer", "open"]

    return (
        <div className={attachedClasses.join(" ")}>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "21px" }}>
                <Logo
                    style={{
                        marginLeft: "15px",
                        height: "28px"
                    }}
                />
                <button
                    className="toggle-menu-btn"
                    onClick={onClose}
                >
                    <IoCloseSharp color="black" size="25" />
                </button>
            </div>
            <div className="side-drawer-links">
                <a onClick={onClose} href="/#why-choose-us">Why choose us</a>
                <a onClick={onClose} href="/#our-services">Our services</a>
                <a onClick={onClose} href="/#clients">Clients</a>
                <a onClick={onClose} href="/#why-choose-us">Services Politics</a>
                <a onClick={onClose} href="/#why-choose-us">Terms and Conditions</a>
                <div>
                    <Button
                        onClick={() => { window.location.href = "#contact-us"; onClose() }}
                    >
                        Contact us
                        </Button>
                </div>
            </div>
        </div>
    )
}

export default SideDrawer