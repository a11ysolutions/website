import React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"
import ToggleMenu from "../ToggleMenu/ToggleMenu"

function Navbar({ onClickMenu }) {
    return (
        <div className="a11y-navbar">
            <Logo />
            <div className="a11y-navbar-toggle">
                <ToggleMenu onClick={onClickMenu} />
            </div>
        </div>
    )
}

export default Navbar