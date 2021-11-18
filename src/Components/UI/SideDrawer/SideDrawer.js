import React from "react"
import "./SideDrawer.css"
import { IoCloseSharp } from "react-icons/io5"
import Logo from "../Logo/Logo"
import "../ToggleMenu/ToggleMenu.css"

function SideDrawer({ show, onClose }) {
    let attachedClasses = ["side-drawer", "close"]
    if (show)
        attachedClasses = ["side-drawer", "open"]

    return (
        <div className={attachedClasses.join(" ")}>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "21px" }}>
                <Logo
                    style={{
                        marginLeft: "15px"
                    }}
                />
                <button
                    className="toggle-menu-btn"
                    onClick={onClose}
                >
                    <IoCloseSharp color="black" size="25" />
                </button>
            </div>
        </div>
    )
}

export default SideDrawer