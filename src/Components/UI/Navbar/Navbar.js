import React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"
import ToggleMenu from "../ToggleMenu/ToggleMenu"

function Navbar({ onClickMenu }) {
    return (
        <div className="a11y-navbar">
            <Logo
                style={{
                    width: "60px",
                    height: "24px",
                    marginLeft: "20px"
                }}
            />
            <div className="a11y-navbar-toggle">
                <ToggleMenu onClick={onClickMenu} />
            </div>
        </div>
    )
}

export default Navbar