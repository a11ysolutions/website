import React from "react"
import "./SideDrawer.css"
import { IoCloseSharp } from "react-icons/io5"
import Logo from "../Logo/Logo"
import "../ToggleMenu/ToggleMenu.css"
import Button from "../Button/Button"

function SideDrawer({ show, onClose, onClickContactUs }) {
    let attachedClasses = ["side-drawer", "close"]
    if (show)
        attachedClasses = ["side-drawer", "open"]

    return (
        show && <div className={attachedClasses.join(" ")} aria-hidden={!show}>
                    <div style={{ display: "flex", justifyContent: "space-between", margin: "21px" }}>
                        <Logo
                            style={{
                                marginLeft: "15px",
                                height: "28px"
                            }}
                            altText="A11ySolutions"
                        />
                        <button
                            className="toggle-menu-btn"
                            onClick={onClose}
                        >
                            <IoCloseSharp color="black" size="25" />
                        </button>
                    </div>
                    <ul className="side-drawer-links">
                        <li><a onClick={onClose} href="/#why-choose-us">Why choose us</a></li>
                        <li><a onClick={onClose} href="/#our-services">Our services</a></li>
                        <li><a onClick={onClose} href="/#clients">Clients</a></li>
                        <li><a onClick={onClose} href="/#why-choose-us">Services Politics</a></li>
                        <li><a onClick={onClose} href="/#why-choose-us">Terms and Conditions</a></li>
                    </ul>
                    <div className="side-drawer-button">
                            <Button
                                //onClick={() => { window.location.href = "#contact-us"; onClose() }}
                                onClick={onClickContactUs}
                                
                            >
                                Contact us
                            </Button>
                    </div>
                </div>
    )
}

export default SideDrawer